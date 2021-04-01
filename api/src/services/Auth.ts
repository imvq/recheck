import { Errors } from 'typescript-rest';
import axios from 'axios';

import Dtos from '@dto';
import Types from '@types';
import Logger from '@common/Logger';
import * as Cookies from '@common/Cookies';

/**
 * Service in charge of authorization stuff.
 */
export default class AuthService {
  public async exchangeAuthCode(exchangeDto: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeAuthCodeResponseDto> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', exchangeDto.code);
      params.append('redirect_uri', exchangeDto.redirectPath);
      params.append('client_id', process.env.LINKEDIN_APP_CLIENT_ID as string);
      params.append('client_secret', process.env.LINKEDIN_APP_CLIENT_SECRET as string);

      const { data } = await axios.post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        params,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      return { accessToken: data[Cookies.BEARER] };
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
        Authorization: `Bearer ${cookies[Cookies.BEARER]}`
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
