import httpStatus from 'http-status';

import { Response } from 'express';

import { reply } from '@business/utilities';

export abstract class HttpError {
  public constructor(protected _message: string, protected _status: number) {}

  public get message() { return this._message; }

  public get statusCode() { return this._status; }
}

export class BadRequestError extends HttpError {
  public constructor(message: string) {
    super(message, httpStatus.BAD_REQUEST);
  }
}

export class ConflictError extends HttpError {
  public constructor(message: string) {
    super(message, httpStatus.CONFLICT);
  }
}

export class InternalServerError extends HttpError {
  public constructor(message: string) {
    super(message, httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class NotFoundError extends HttpError {
  public constructor(message: string) {
    super(message, httpStatus.NOT_FOUND);
  }
}

export class UnauthorizedError extends HttpError {
  public constructor(message: string) {
    super(message, httpStatus.UNAUTHORIZED);
  }
}

export class ForbiddenError extends HttpError {
  public constructor(message: string) {
    super(message, httpStatus.FORBIDDEN);
  }
}

export function useDefaultErrorHandler(error: any, response: Response) {
  if (error instanceof HttpError) {
    reply(response, { message: error.message }, error.statusCode);
    return;
  }

  reply(response, { message: 'Server-side error occured.' }, httpStatus.INTERNAL_SERVER_ERROR);
}
