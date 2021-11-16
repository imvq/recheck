import axios from 'axios';

import { Request, Response } from 'express';

import * as errors from '@business/errors';

import { assertBodyData, reply } from '@business/commons';

export async function exchangeLinkedInCode(request: Request, response: Response) {
  interface IBodyData {
    authCode: string;
    redirectPath: string;
  }

  const { authCode, redirectPath }: IBodyData = request.body;
  assertBodyData(authCode, redirectPath);

  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', authCode);
    params.append('redirect_uri', redirectPath);
    params.append('client_id', process.env.LINKEDIN_APP_CLIENT_ID as string);
    params.append('client_secret', process.env.LINKEDIN_APP_CLIENT_SECRET as string);

    const options = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    const { data } = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', params, options);

    reply(response, { accessToken: `linkedin@${data['access_token']}` });
  } catch {
    throw new errors.InternalServerError('Error while exchanging LinkedIn auth code.');
  }
}
