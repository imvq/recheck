import { Errors } from 'typescript-rest';
import axios from 'axios';

import Dtos from '@dto';
import Types from '@types';
import Logger from '@common/Logger';

/**
 * Service in charge of authorization stuff.
 */
export default class AuthService {
  public async exchangeAuthCode(codeDto: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeAuthCodeResponseDto> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', codeDto.code);
      params.append('redirect_uri', process.env.AUTH_RETURN_HOSTNAME as string);
      params.append('client_id', process.env.LINKEDIN_APP_CLIENT_ID as string);
      params.append('client_secret', process.env.LINKEDIN_APP_CLIENT_SECRET as string);

      const { data } = await axios.post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        params,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      return {
        accessToken: data['access_token']
      };
    } catch (error) {
      Logger.ifdev()?.log(JSON.stringify(error));
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Internal database error.');
    }
  }

  public async checkAuth(cookies: Types.StringIndexable)
    : Promise<Types.CheckAuthResponseDto> {
    try {
      const config = { headers: {
        Authorization: `Bearer ${cookies['access_token']}`
      } };
      await axios.get('https://api.linkedin.com/v2/me', config);

      return { success: true };
    } catch (error) {
      Logger.ifdev()?.log(JSON.stringify(error));
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Internal database error.');
    }
  }
}
