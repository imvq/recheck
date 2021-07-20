import { Path, POST } from 'typescript-rest';
import { BodyGuard } from 'typescript-rest-body-guard';
import { Inject } from 'typescript-ioc';

import dto from '@dto';
import UserService from '@services/User';

import * as apiResponses from '@typing/apiResponses';

/**
 * Default controller in charge of users.
 */
@Path('/user')
export default class UserController {
  public constructor(@Inject private readonly injectedService: UserService) {}

  /**
   * Check if a user with provided shareable ID exists
   * and is connected to asker through teh company.
   */
  @Path('/target/is-connected')
  @BodyGuard
  @POST
  public async isTargetConnected(bodyData: dto.IsTargetConnectedDto)
    : Promise<apiResponses.IIsTargetConnectedResponsDto> {
    return this.injectedService.isTargetConnected(bodyData);
  }

  /**
   * Check if provided email is available.
   */
  @Path('/email/is-available')
  @BodyGuard
  @POST
  public async heckIsEmailAvailable(bodyData: dto.СheckIsEmailAvailableDto)
    : Promise<apiResponses.ICheckIsEmailAvailableResponseDto> {
    return this.injectedService.checkIsEmailAvailable(bodyData);
  }

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
  @Path('/quick-search')
  @BodyGuard
  @POST
  public async quickSearch(bodyData: dto.SearchUserDto)
    : Promise<apiResponses.ISearchUserResponseDto> {
    return this.injectedService.searchUser(bodyData, { isQuickSearch: true });
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
   * Get the amount of reviews of user.
   */
  @Path('/amount/reviews-got')
  @BodyGuard
  @POST
  public async getNReviewsGot(bodyData: dto.GetNReviewsGotDto)
    : Promise<apiResponses.IGetNReviewsGotAmountResponseDto> {
    return this.injectedService.getNReviewsGot(bodyData);
  }

  /**
   * Get n-th review left by user.
   */
  @Path('/get/nth-review-got')
  @BodyGuard
  @POST
  public async getNthReviewGot(bodyData: dto.GetNthReviewGotDto)
    : Promise<apiResponses.IGetNthReviewGotResponseDto> {
    return this.injectedService.getNthReviewGot(bodyData);
  }

  /**
   * Get the amount of reviews left by user.
   */
  @Path('/amount/reviews-left')
  @BodyGuard
  @POST
  public async getNReviewsOf(bodyData: dto.GetNReviewsLeftDto)
    : Promise<apiResponses.IGetNReviewsLeftAmountResponseDto> {
    return this.injectedService.getNReviewsLeft(bodyData);
  }

  /**
   * Get n-th review left by user.
   */
  @Path('/get/nth-review-left')
  @BodyGuard
  @POST
  public async getNthReviewOf(bodyData: dto.GetNthReviewLeftDto)
    : Promise<apiResponses.IGetNthReviewLeftResponseDto> {
    return this.injectedService.getNthReviewLeft(bodyData);
  }

  /**
   * Check if a user has access to reviews about another user.
   */
  @Path('/check/access/reviews-about')
  @BodyGuard
  @POST
  public async checkAccessToReviewsAboutUser(bodyData: dto.CheckAccessToReviewsAboutUserDto)
    : Promise<apiResponses.ICheckAccessToReviewsAboutUserDto> {
    return this.injectedService.checkAccessToReviewsAboutUser(bodyData);
  }
}
