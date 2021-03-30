import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Types from '@types';
import UserService from '@services/User';
import Dtos from '@dto';

/**
 * Default controller in charge of users.
 */
@Path('/user')
export default class UserController {
  public constructor(@Inject private readonly injectedService: UserService) {}

  /**
   * Getting user info.
   */
  @POST
  public getUser(data: Dtos.UserDto): Types.UserResponseDto {
    return this.injectedService.getUser(data);
  }
}
