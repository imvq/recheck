import { Path, POST } from 'typescript-rest';
import { BodyGuard } from 'typescript-rest-body-guard';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import UserService from '@services/User';
import * as ApiResponses from '@typing/apiResponses';

/**
 * Default controller in charge of checking the API.
 */
@Path('/user')
export default class UserController {
  public constructor(@Inject private readonly injectedService: UserService) {}

  /**
   * Check if the user is registered in the app.
   */
  @Path('/is-registered')
  @BodyGuard
  @POST
  public async checkIsUserRegistered(bodyData: Dtos.CheckIsUserRegisteredDto)
    : Promise<ApiResponses.ICheckIsUserRegisteredResponseDto> {
    return this.injectedService.checkIsUserRegistered(bodyData);
  }

  /**
   * Prepare user to be registered.
   */
  @Path('/prepare')
  @BodyGuard
  @POST
  public async prepareUser(bodyData: Dtos.PrepareUserDto)
    : Promise<ApiResponses.IPrepareUserResponseDto> {
    return this.injectedService.prepareUser(bodyData);
  }
}
