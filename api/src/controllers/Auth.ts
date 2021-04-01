import { Path, GET, POST, Context, ServiceContext } from 'typescript-rest';
import { JwtCookieGuard } from 'typescript-rest-jwt-guard';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import Types from '@types';
import AuthService from '@services/Auth';
import * as Cookies from '@common/Cookies';

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
  public exchangeAuthCode(data: Dtos.ExchangeAuthCodeDto)
    : Promise<Types.ExchangeAuthCodeResponseDto> {
    return this.injectedService.exchangeAuthCode(data);
  }

  /**
   * Check if the user is authorized with LinkedIn.
   */
  @Path('/check')
  @GET
  public checkAuth(@Context context: ServiceContext)
    : Promise<Types.CheckAuthResponseDto> {
    return this.injectedService.checkAuth(context.request.cookies);
  }

  /**
   * Get user profile info form LinkedIn.
   */
  @JwtCookieGuard(Cookies.BEARER)
  @Path('/profile')
  @GET
  public getProfile(@Context context: ServiceContext)
    : Promise<Types.GetProfileResponseDto> {
    return this.injectedService.getProfile(context.request.cookies);
  }
}
