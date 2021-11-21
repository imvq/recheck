import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import http from 'http';
import httpStatus from 'http-status';

import * as constants from '@business/constants';

import { useDefaultErrorHandler } from '@business/errors';
import { logger, morgan } from '@business/preloaded';
import { reply } from '@business/commons';

/**
 * Main server application class.
 * Server runner must initialize the app and then start it.
 */
export default class BackendApplication {
  private server: http.Server | null = null;

  public constructor(private readonly app = express()) {
    this.registerMidlewares();
    this.applyControllers();
    this.applyJsonErrorHandler();
  }

  public start = async () => new Promise<void>(resolve => {
    const host = process.env.HOST || constants.DEFAULT_HOST;
    const port = Number.parseInt(process.env.PORT || constants.DEFAULT_PORT);

    this.server = this.app.listen(port, host, () => {
      logger?.log(`Listening to ${host}:${port}`);

      return resolve();
    });
  });

  public stop = async () => new Promise<void>(resolve => {
    this.server?.close();

    return resolve();
  });

  private registerMidlewares() {
    this.app.use('/media', express.static('media'));
    this.app.use(cors({ credentials: true, origin: process.env.ORIGIN || '*' }));
    this.app.use(express.json());
    this.app.use(cookieParser());
    morgan && this.app.use(morgan('dev') as express.Handler);
  }

  private applyControllers() {
    this.app.use('/api/v1/login', require('@controllers/login').default);
    this.app.use('/api/v1/reviews', require('@controllers/reviews').default);
    this.app.use('/api/v1/search', require('@controllers/search').default);
    this.app.use('/api/v1/users', require('@controllers/users').default);
  }

  private applyJsonErrorHandler() {
    this.app.use((_req: Request, res: Response) => {
      if (!res.headersSent) {
        reply(res, { message: 'Route not found' }, httpStatus.NOT_FOUND);
      }
    });

    this.app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
      if (!res.headersSent) {
        useDefaultErrorHandler(err, res);
      }

      return next();
    });
  }
}
