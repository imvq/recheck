import axios from 'axios';

import Dtos from '@dto';
import Types from '@types';

/**
 * Service in charge of authorization stuff.
 */
export default class AuthService {
  public async exchangeAuthCode(codeDto: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeAuthCodeResponseDto> {
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
  }
}
