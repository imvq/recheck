import { Response } from 'express';

export function reply(responseInjection: Response, message: object | string, status = 200) {
  responseInjection.status(status).json(message);
}
