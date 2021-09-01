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
   * and is connected to asker through the company.
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
  @Path('/availability/email')
  @BodyGuard
  @POST
  public async checkIsEmailAvailable(bodyData: dto.СheckIsEmailAvailableDto)
    : Promise<apiResponses.ICheckIsEmailAvailableResponseDto> {
    return this.injectedService.checkIsEmailAvailable(bodyData);
  }

  /**
   * Check if a user with provided shareableID already has a review
   * from a user with provided profileID.
   */
  @Path('/availability/review')
  @BodyGuard
  @POST
  public async checkIsUserAvailableForReview(bodyData: dto.CheckIsUserAvailableForReviewDto)
    : Promise<apiResponses.ICheckIsUserAvailableForReviewResponseDto> {
    return this.injectedService.checkIsUserAvailableForReview(bodyData);
  }

  /**
   * Check if a user can be viewed by another one.
   */
  @Path('/availability/can-view')
  @BodyGuard
  @POST
  public async checkIsUserCanBeViewed(bodyData: dto.CheckIsUserCanBeViewed)
    : Promise<apiResponses.ICheckIsUserCanBeViewedResponseDto> {
    return this.injectedService.checkIsUserCanBeViewed(bodyData);
  }

  /**
   * Check if a user has free profile views.
   */
  @Path('/availability/profile-views')
  @BodyGuard
  @POST
  public async doesUserHasAvailableProfilesViews(bodyData: dto.DoesUserHasAvailableProfilesViewsDto)
    : Promise<apiResponses.IDoesUserHasAvailableProfilesViewsResponseDto> {
    return this.injectedService.doesUserHasAvailableProfilesViews(bodyData);
  }

  /**
   * Make one user available to look through another's profile.
   */
  @Path('/availability/profile/provide')
  @BodyGuard
  @POST
  public async makeUserAvailable(bodyData: dto.MakeUserAvailableDto)
    : Promise<apiResponses.IMakeUserAvailableResponseDto> {
    return this.injectedService.makeUserAvailable(bodyData);
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
   * Resend confirmation mail.
   */
  @Path('/confirmation/resend')
  @BodyGuard
  @POST
  public async resendConfirmation(bodyData: dto.ResendConfirmationDto)
    : Promise<apiResponses.IResendConfirmationResponseDto> {
    return this.injectedService.resendConfirmation(bodyData);
  }

  /**
   * Update confirmation email.
   */
  @Path('/confirmation/reassign')
  @BodyGuard
  @POST
  public async reassignConfirmationEmail(bodyData: dto.ReassignConfirmationEmailDto)
    : Promise<apiResponses.IReassignConfirmationEmailResponseDto> {
    return this.injectedService.reassignConfirmationEmail(bodyData);
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
   * Search user by shareable ID.
   */
  @Path('/search/by/shareable-id')
  @BodyGuard
  @POST
  public async searchByShareableId(bodyData: dto.SearchUserByShareableIdDto)
    : Promise<apiResponses.ISearchUserByShareableIdResponseDto> {
    return this.injectedService.searchUserByShareabledId(bodyData);
  }

  /**
   * Get colleagues of user.
   */
  @Path('/get/colleagues')
  @BodyGuard
  @POST
  public async getColleagues(bodyData: dto.GetColleaguesDto)
    : Promise<apiResponses.IGetColleaguesResponseDto> {
    return this.injectedService.getColleagues(bodyData);
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
   * Get name of a user and reviews of it.
   */
  @Path('/access/amount/reviews-got')
  @BodyGuard
  @POST
  public async getTargetNReviewsGot(bodyData: dto.GetTargetNReviewsGotDto)
    : Promise<apiResponses.IGetTargetNReviewsGotResponseDto> {
    return this.injectedService.getTargetNReviewsGot(bodyData);
  }

  /**
   * Get n-th review (about other user) left by user.
   */
  @Path('/access/get/nth-review-got')
  @BodyGuard
  @POST
  public async getTargetNthReviewsGot(bodyData: dto.GetTargetNthReviewGotDto)
     : Promise<apiResponses.IGetNthReviewGotResponseDto> {
    return this.injectedService.getTargetNthReviewGot(bodyData);
  }
}
