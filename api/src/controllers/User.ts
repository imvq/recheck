import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import UserService from '@services/User';

/**
 * Default controller in charge of checking the API.
 */
@Path('/user')
export default class UserController {
  public constructor(@Inject private readonly injectedService: UserService) {}

  /**
   * Check if the user is registered in the service
   * or it has come first time.
   */
  @Path('/check/registered')
  @POST
  public checkIsRegistered(checkDto: Dtos.IsRegisteredDto)
    : Promise<boolean> {
    return this.injectedService.isRegistered(checkDto);
  }
}
