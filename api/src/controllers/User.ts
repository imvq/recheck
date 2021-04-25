import { GET, Path, POST, Context, ServiceContext } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Dtos from '@dto';
import Types from '@types';
import UserService from '@services/User';

/**
 * Default controller in charge of checking the API.
 */
@Path('/user')
export default class UserController {
  public constructor(@Inject private readonly injectedService: UserService) {}

  /**
   * Save user info.
   */
  @Path('/prepare')
  @POST
  public async prepareUser(profileInfoDto: Dtos.ProfileDto)
    : Promise<void> {
    return this.injectedService.prepareUser(profileInfoDto);
  }

  /**
   * Save confirmed user id.
   */
  @Path('/register')
  @POST
  public async registerUser(registrationDto: Dtos.RegistrationDto)
    : Promise<void> {
    return this.injectedService.registerUser(registrationDto);
  }

  // /**
  //  * Check if the user is registered in the app.
  //  */
  // @Path('/is-registered')
  // @GET
  // public async checkIsRegistered(data: Dtos.CheckIsRegisteredDto)
  //   : Promise<>
}
