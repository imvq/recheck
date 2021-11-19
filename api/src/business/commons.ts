import { Response } from 'express';

import { BadRequestError } from '@business/errors';

export function assertBodyData(...args: any[]) {
  if (!args.every(value => value !== undefined)) {
    throw new BadRequestError('Not all required body fields are defined or formatted correctly.');
  }
}

const successReply = { message: 'Success.' };

export function reply(responseInjection: Response, message: object = successReply, status = 200) {
  responseInjection.status(status).json(message);
}

export class AccessToken {
  private static testRegex = /(linkedin|google)@\w+/gm;

  private _socialMedia: 'linkedin' | 'google' | null = null;

  private _tokenValue: string | null = null;

  public get socialMedia() { return this._socialMedia; }

  public get tokenValue() { return this._tokenValue; }

  public constructor(value: string) {
    if (AccessToken.testAccessToken(value)) {
      this.parseAccessToken(value);
    }
  }

  private static testAccessToken(fullToken: any) {
    return typeof fullToken === 'string' && AccessToken.testRegex.test(fullToken);
  }

  private static isSocialMedia(maybeSocialMedia: any): maybeSocialMedia is 'linkedin' | 'google' {
    return ['linkedin', 'google'].includes(maybeSocialMedia);
  }

  private parseAccessToken(fullToken: string) {
    const parsed = [...fullToken.matchAll(AccessToken.testRegex)][0];

    if (AccessToken.isSocialMedia(parsed[1])) {
      this._socialMedia = parsed[1];
      this._tokenValue = parsed[2];
    }
  }
}