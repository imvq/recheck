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
   * Check if registered user is confirmed.
   */
  @Path('/is-confirmed')
  @BodyGuard
  @POST
  public async checkIsUserConfirmed(bodyData: Dtos.CheckIsUserConfirmedDto)
    : Promise<ApiResponses.ICheckIsUserConfirmedResponseDto> {
    return this.injectedService.checkIsUserConfirmed(bodyData);
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

  /**
   * Complete user registration.
   */
  @Path('/confirm')
  @BodyGuard
  @POST
  public async completeRegistration(bodyData: Dtos.CompleteRegistrationDto)
    : Promise<ApiResponses.ICompleteRegistration> {
    return this.injectedService.completeRegistration(bodyData);
  }

  /**
   * Search user by name.
   */
  @Path('/search')
  @BodyGuard
  @POST
  public async search(bodyData: Dtos.SearchUserDto)
    : Promise<ApiResponses.ISearchUserResponseDto> {
    return this.injectedService.searchUser(bodyData);
  }

  /**
   * Get the amount of reviews left by the user.
   */
  @Path('/amount/reviews-of')
  @BodyGuard
  @POST
  public async getNReviewsOf(bodyData: Dtos.GetNReviewsOfDto)
    : Promise<ApiResponses.IGetNReviewsOfAmountResponseDto> {
    return this.injectedService.getNReviewsOf(bodyData);
  }
}
