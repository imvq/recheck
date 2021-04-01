import { Server, Errors } from 'typescript-rest';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import express, {
  Application,
  Handler,
  Request,
  Response,
  NextFunction
} from 'express';

import * as Constants from '@common/Constants';
import * as Computed from '@common/Computed';
import Types from '@types';
import Utils from '@utils';

import Logger from '@common/Logger';
import connect from '@database/connect';

/**
 * Main server application class.
 */
export default class App {
  private host: string = Constants.DEFAULT_HOST;

  private port: number = Constants.DEFAULT_PORT;

  private server: Types.Nullable<http.Server> = null;

  public constructor(private readonly app: Application = express()) {
    this.resolveHost();
    this.resolvePort();
    this.applyMidlewares();
    this.applyControllers();
    this.applyErrorHandler();
    this.applyStaticsResolver();

    if (process.env.NODE_ENV === 'development') {
      this.applyDevStuff();
    }
  }

  /**
   * Start the application.
   */
  public async start(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server = this.app.listen(this.port, this.host, () => {
        Logger.ifdev()?.log(`Listening to ${this.host}:${this.port}`);
        return resolve();
      });
    });
  }

  /**
   * Stop the application.
   */
  public async stop(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server?.close();
      return resolve();
    });
  }

  /**
   * If a valid environment variable for the host is provided
   * then use it.
   */
  private resolveHost(): void {
    if (process.env.HOST) {
      this.host = process.env.HOST as string;
    }
  }

  /**
   * If a valid environment variable for the port is provided
   * then use it.
   */
  private resolvePort(): void {
    const maybePort = process.env.PORT;
    if (Utils.isString(maybePort)
      && Utils.isValidNumber(maybePort as string)) {
      this.port = parseInt(maybePort as string, 10);
    }
  }

  /**
   * Plug in extensions for the application.
   */
  private applyMidlewares(): void {
    // Cross-Origin Resource Sharing.
    this.app.use(cors({
      credentials: true,
      origin: process.env.ORIGIN as string
    }) as Types.CorsMiddleware);

    // Provide functionality to read POST data.
    this.app.use(bodyParser.json());

    // Provide functionality to read cookies.
    this.app.use(cookieParser());

    // Provide database connection on each request.
    this.app.use(async (
      _request: Request, _response: Response, advance: NextFunction
    ) => {
      await connect();
      advance();
    });
  }

  /**
   * Apply IoC REST controllers.
   */
  private applyControllers(): void {
    const controllersDir = `${Computed.ROOT_DIR}/controllers`;
    const apiRouter = express.Router();
    Server.loadControllers(apiRouter, `${controllersDir}/**/*.js`, __dirname);
    this.app.use('/api/v1', apiRouter);
  }

  /**
   * Apply JSON error handler.
   */
  private applyErrorHandler(): void {
    this.app.use((
      error: any, _: Request, response: Response, advance: NextFunction
    ) => {
      if (error instanceof Errors.HttpError) {
        if (!response.headersSent) {
          response.set('Content-Type', 'application/json')
            .status(error.statusCode)
            .json({ error: error.message, code: error.statusCode });
        }
      }

      // Important to allow default error handler to close connection
      // if headers are already sent.
      return advance();
    });
  }

  /**
   * Provide resolving of static files.
   */
  private applyStaticsResolver(): void {
    this.app.use('/media', express.static(`${Computed.ROOT_DIR}/media`));
  }

  /**
   * Apply development-only stuff.
   */
  public applyDevStuff(): void {
    // Development logging.
    this.app.use(morgan('dev') as Handler);

    // Interactive API documenting.
    Server.swagger(this.app, { filePath: `${Computed.ROOT_DIR}/swagger.yaml` });
  }
}
