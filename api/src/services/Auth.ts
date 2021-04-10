import { Errors } from 'typescript-rest';
import axios from 'axios';

import * as Constants from '@common/Constants';
import * as Cookies from '@common/Cookies';
import Dtos from '@dto';
import Types from '@types';
import Utils from '@utils';
import Logger from '@common/Logger';

/**
 * Service in charge of authorization stuff.
 */
export default class AuthService {
  public async exchangeLinkedInAuthCode(exchangeDto: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeLinkedInAuthCodeResponseDto> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('code', exchangeDto.code);
      params.append('redirect_uri', exchangeDto.redirectPath);
      params.append('client_id', process.env.LINKEDIN_APP_CLIENT_ID as string);
      params.append('client_secret', process.env.LINKEDIN_APP_CLIENT_SECRET as string);

      const { data } = await axios.post(Constants.AUTH_URL, params, Utils.createUrlEncodedConfig());

      return { [Cookies.LI_AT]: data['access_token'] };
    } catch (error) {
      Logger.ifdev()?.log(JSON.stringify(error));
      throw error instanceof Errors.UnauthorizedError ? error
        : new Errors.InternalServerError('Unexpected error.');
    }
  }
}
