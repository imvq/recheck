import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import Types from '@types';
import AuthService from '@services/Auth';

/**
 * Default controller in charge of checking the API.
 */
@Path('/auth')
export default class AuthController {
  public constructor(@Inject private readonly injectedService: AuthService) {}

  /**
   * Exchange LinkedIn authorization code for an access token.
   */
  @Path('/confirm')
  @POST
  public async exchangeAuthCode(data: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeAuthCodeResponseDto> {
    return this.injectedService.exchangeAuthCode(data);
  }
}
