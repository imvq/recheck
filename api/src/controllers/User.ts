import { Path, POST } from 'typescript-rest';
import { BodyGuard } from 'typescript-rest-body-guard';
import { Inject } from 'typescript-ioc';

import dto from '@dto';
import UserService from '@services/User';
import * as apiResponses from '@typing/apiResponses';

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
  public async checkIsUserRegistered(bodyData: dto.CheckIsUserRegisteredDto)
    : Promise<apiResponses.ICheckIsUserRegisteredResponseDto> {
    return this.injectedService.checkIsUserRegistered(bodyData);
  }

  /**
   * Check if registered user is confirmed.
   */
  @Path('/is-confirmed')
  @BodyGuard
  @POST
  public async checkIsUserConfirmed(bodyData: dto.CheckIsUserConfirmedDto)
    : Promise<apiResponses.ICheckIsUserConfirmedResponseDto> {
    return this.injectedService.checkIsUserConfirmed(bodyData);
  }

  /**
   * Prepare user to be registered.
   */
  @Path('/prepare')
  @BodyGuard
  @POST
  public async prepareUser(bodyData: dto.PrepareUserDto)
    : Promise<apiResponses.IPrepareUserResponseDto> {
    return this.injectedService.prepareUser(bodyData);
  }

  /**
   * Complete user registration.
   */
  @Path('/confirm')
  @BodyGuard
  @POST
  public async completeRegistration(bodyData: dto.CompleteRegistrationDto)
    : Promise<apiResponses.ICompleteRegistration> {
    return this.injectedService.completeRegistration(bodyData);
  }

  /**
   * Search user by name.
   */
  @Path('/search')
  @BodyGuard
  @POST
  public async search(bodyData: dto.SearchUserDto)
    : Promise<apiResponses.ISearchUserResponseDto> {
    return this.injectedService.searchUser(bodyData);
  }

  /**
   * Get the amount of reviews left by user.
   */
  @Path('/amount/reviews-left')
  @BodyGuard
  @POST
  public async getNReviewsOf(bodyData: dto.GetNReviewsOfDto)
    : Promise<apiResponses.IGetNReviewsOfAmountResponseDto> {
    return this.injectedService.getNReviewsLeft(bodyData);
  }

  /**
   * Get n-th review of user.
   */
  @Path('/get/nth-review-left')
  @BodyGuard
  @POST
  public async getNthReviewOf(bodyData: dto.GetNthReviewOfDto)
    : Promise<apiResponses.IGetNthReviewOfResponseDto> {
    return this.injectedService.getNthReviewLeft(bodyData);
  }
}
