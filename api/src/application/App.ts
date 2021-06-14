import { Server, Errors } from 'typescript-rest';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import https from 'https';
import fs from 'fs';
import express, {
  Application,
  Handler,
  Request,
  Response,
  NextFunction
} from 'express';

import * as constants from '@common/constants';
import * as computed from '@common/computed';
import * as generalTypes from '@typing/general';
import * as utilityTypes from '@typing/utility';
import utils from '@utils';

import logger from '@logging/Logger';
import connect from '@database/connect';

/**
 * Main server application class.
 */
export default class App {
  private host: string = constants.DEFAULT_HOST;

  private port: number = constants.DEFAULT_PORT;

  private server: utilityTypes.Nullable<https.Server | http.Server> = null;

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
        logger.log(`Listening to ${this.host}:${this.port}`);
        return resolve();
      });
    });
  }

  /**
   * Start the application over self-signed SSL certificate.
   */
  public async dev(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server = https.createServer({
        key: fs.readFileSync(process.env.SSL_KEY_PATH as string),
        cert: fs.readFileSync(process.env.SSL_CRT_PATH as string)
      }, this.app);

      this.server.listen(this.port, this.host, () => {
        logger.log(`Listening to ${this.host}:${this.port}`);
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
    if (utils.isString(maybePort)
      && utils.isValidNumber(maybePort as string)) {
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
    }) as generalTypes.ICorsMiddleware);

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
    const controllersDir = `${computed.ROOT_DIR}/controllers`;
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
    this.app.use('/media', express.static(`${computed.ROOT_DIR}/media`));
  }

  /**
   * Apply development-only stuff.
   */
  public applyDevStuff(): void {
    // Development logging.
    this.app.use(morgan('dev') as Handler);

    // Interactive API documenting.
    Server.swagger(this.app, { filePath: `${computed.ROOT_DIR}/swagger.yaml` });
  }
}
