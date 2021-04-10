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
  @Path('/register')
  @POST
  public async registerUser(registrationDto: Dtos.RegistrationDto)
    : Promise<void> {
    return this.injectedService.registerUser(registrationDto);
  }

  /**
   * Get user profile info form LinkedIn.
   */
   @Path('/profile/linkedin')
   @GET
  public async getLinkedInProfile(@Context context: ServiceContext)
     : Promise<Types.GetProfileResponseDto> {
    return this.injectedService.getLinkedInProfile(context.request.cookies);
  }
}
