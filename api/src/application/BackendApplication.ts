import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import fs from 'fs';
import http from 'http';
import https from 'https';
import morgan from 'morgan';
import path from 'path';

import express, { Application, Handler, Request, Response, NextFunction } from 'express';
import { Server, Errors } from 'typescript-rest';

import * as constants from '@business/constants';

import logger from '@business/logging';
import PostgreSqlConnector from '@database/connect';

const getHost = () => process.env.HOST || constants.DEFAULT_HOST;
const getPort = () => Number.parseInt(process.env.PORT || '') || constants.DEFAULT_PORT;
const getHome = () => (require.main && path.dirname(require.main.filename));
const getRoot = () => (require && require.main ? getHome() : `../${__dirname}`);

/**
 * Main server application class.
 */
export default class BackendApplication {
  private host = getHost();

  private port = getPort();

  private root = getRoot();

  private server: https.Server | http.Server | null = null;

  private database = new PostgreSqlConnector();

  public constructor(private readonly app: Application = express()) {
    if (process.env.NODE_ENV === 'development') {
      this.applyDevelopmentStuff();
    }

    this.applyMidlewares();
    this.applyControllers();
    this.applyJsonErrorHandler();
  }

  public start = async () => new Promise<void>(resolve => {
    this.server = this.app.listen(this.port, this.host, () => {
      logger.log(`Listening to ${this.host}:${this.port}`);
      return resolve();
    });
  });

  public stop = async () => new Promise<void>(resolve => {
    this.server?.close();
    return resolve();
  });

  /**
   * Start the application over self-signed SSL certificate.
   * Use this in development instead of using start().
   */
  public async dev() {
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

  private applyMidlewares() {
    // Cross-Origin Resource Sharing.
    this.app.use(cors({ credentials: true, origin: process.env.ORIGIN || '*' }));

    // Provide functionality to read POST data.
    this.app.use(bodyParser.json());

    // Provide functionality to read cookies.
    this.app.use(cookieParser());

    // Provide database connection on each request.
    this.app.use(this.connectionHook.bind(this));
  }

  /**
   * Database connection handler.
   */
  private async connectionHook(_req: Request, _res: Response, next: NextFunction) {
    await this.database.connect();
    next();
  }

  /**
   * Apply IoC REST controllers.
   */
  private applyControllers() {
    const controllersDir = `${this.root}/controllers`;
    const apiRouter = express.Router();

    Server.loadControllers(apiRouter, `${controllersDir}/**/*.js`, __dirname);

    this.app.use('/api/v1', apiRouter);
  }

  private applyDevelopmentStuff() {
    // Development logging.
    this.app.use(morgan('dev') as Handler);

    // Interactive API documenting.
    Server.swagger(this.app, { filePath: `${this.root}/swagger.yaml` });
  }

  private applyJsonErrorHandler() {
    this.app.use(this.jsonErrorsHook.bind(this));
  }

  /**
   * Errors handler (Since express does not provide its own anymore).
   */
  private jsonErrorsHook(err: any, _: Request, res: Response, next: NextFunction) {
    if (err instanceof Errors.HttpError && !res.headersSent) {
      res.set('Content-Type', 'application/json')
        .status(err.statusCode)
        .json({ error: err.message, code: err.statusCode });
    }

    // Important to allow default error handler to close connection
    // if headers are already sent.
    return next();
  }
}
