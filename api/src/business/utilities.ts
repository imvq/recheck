import { Response } from 'express';

import { BadRequestError } from '@business/errors';

export function assertBodyData(...args: any[]) {
  if (!args.every(value => value !== undefined)) {
    throw new BadRequestError('Not all required body fields are defined or formatted correctly.');
  }
}

export function reply(responseInjection: Response, message: object, status = 200) {
  responseInjection.status(status).json(message);
}
