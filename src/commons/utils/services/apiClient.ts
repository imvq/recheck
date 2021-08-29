import axios from 'axios';

import * as apiResponses from '../../types/responses';
import * as generalTypes from '../../types/general';

class ApiClient {
  private instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public checkIsEmailAvailable(email: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsEmailAvailableResponseDto> {
    return this.instance.post('/user/availability/email', { email });
  }

  public checkIsUserAvailableForReview(
    checkData: generalTypes.ICheckIsUserAvailableForReviewDto
  ): generalTypes.APIResponse<apiResponses.ICheckIsUserAvailableForReviewResponseDto> {
    return this.instance.post('/user/availability/review', checkData);
  }

  public checkIsUserCanBeViewed(checkData: generalTypes.ICheckIsUserCanBeViewed)
    : generalTypes.APIResponse<apiResponses.ICheckIsUserCanBeViewedResponseDto> {
    return this.instance.post('/user/availability/can-view', checkData);
  }

  public doesUserHasAvailableProfilesViews(profileId: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsUserAvailableForReviewResponseDto> {
    return this.instance.post('/user/availability/profile-views', { profileId });
  }

  public checkIsRegistered(profileId: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsRegisteredResponseDto> {
    return this.instance.post('/user/is-registered', { profileId });
  }

  public checkIsConfirmed(profileId: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsConfirmedResponseDto> {
    return this.instance.post('/user/is-confirmed', { profileId });
  }

  public checkIsTargetConnected(connectionData: generalTypes.IGetConnectedUserDataDto)
    : generalTypes.APIResponse<apiResponses.IIsTargetConnectedResponseDto> {
    return this.instance.post('/user/target/is-connected', connectionData);
  }

  public getColleagues(profileId: string)
    : generalTypes.APIResponse<apiResponses.IGetColleaguesResponseDto> {
    return this.instance.post('/user/get/colleagues', { profileId });
  }

  public getMatchedCompanies(sequence: string)
    : generalTypes.APIResponse<apiResponses.IGetMatchedCompaniesResponseDto> {
    return this.instance.post('/companies/find-matched', { sequence });
  }

  public getRecommendations(chunk: number)
    : generalTypes.APIResponse<apiResponses.IGetRecommendationsResponseDto> {
    return this.instance.post('/companies/recommendations', { chunk });
  }

  public makeUserAvailable(bodyData: generalTypes.IMakeUserAvailableDto)
    : generalTypes.APIResponse<apiResponses.IMakeUserAvailableResponseDto> {
    return this.instance.post('/user/availability/profile/provide', bodyData);
  }

  public quickSearchUser(tokens: string[])
    : generalTypes.APIResponse<{ results: apiResponses.ISearchUserResponseDto[]; }> {
    return this.instance.post('/user/quick-search', { tokens });
  }

  public searchUser(tokens: string[])
    : generalTypes.APIResponse<{ results: apiResponses.ISearchUserResponseDto[]; }> {
    return this.instance.post('/user/search', { tokens });
  }

  public searchUserByShareableId(shareableId: string)
    : generalTypes.APIResponse<{ result: apiResponses.ISearchUserResponseDto; }> {
    return this.instance.post('/user/search/by/shareable-id', { shareableId });
  }

  public completeRegistration(completionDto: generalTypes.ICompleteRegistrationDto)
    : generalTypes.APIResponse<apiResponses.ICompleteRegistartionResponseDto> {
    return this.instance.post('/user/confirm', completionDto);
  }

  public exchangeLinkedInCode(code: string)
    : generalTypes.APIResponse<apiResponses.IExchangeLinkedInCodeResposneDto> {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return this.instance.post('/linkedin/oauth/exchange', body);
  }

  public getProfileLinkedIn()
    : generalTypes.APIResponse<apiResponses.IGetProfileLinkedInDto> {
    return this.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public prepareProfile(profileInfoDto: generalTypes.IPrepareProfileDto)
    : generalTypes.APIResponse<apiResponses.IPrepareProfileResponseDto> {
    return this.instance.post('/user/prepare', profileInfoDto);
  }

  public resendConfirmation(profileId: string)
    : generalTypes.APIResponse<apiResponses.IResendConfirmationResponseDto> {
    return this.instance.post('/user/confirmation/resend', { profileId });
  }

  public reassignConfirmationEmail(reassignDto: generalTypes.IReassignConfirmationEmailDto)
    : generalTypes.APIResponse<apiResponses.IReassignConfirmationEmailResponseDto> {
    return this.instance.post('/user/confirmation/reassign', reassignDto);
  }

  public prepareReview(reviewData: generalTypes.IReviewData)
    : generalTypes.APIResponse<apiResponses.IPrepareReviewResponseDto> {
    return this.instance.post('/review/prepare', reviewData);
  }

  public bindReviewTarget(bindingData: generalTypes.IBindReviewTargetDto)
    : generalTypes.APIResponse<apiResponses.IBindReviewtargetResponseDto> {
    return this.instance.post('/review/bind-target', bindingData);
  }

  public getNReviewsGot(targetData: generalTypes.IGetNReviewsGotDto)
    : generalTypes.APIResponse<apiResponses.IGetNReviewsGotResponseDto> {
    return this.instance.post('/user/amount/reviews-got', targetData);
  }

  public getNthReviewGot(targetData: generalTypes.IGetNthReviewGotDto)
    : generalTypes.APIResponse<apiResponses.IGetNthReviewGotResponseDto> {
    return this.instance.post('/user/get/nth-review-got', targetData);
  }

  public getNReviewsLeft(targetData: generalTypes.IGetNReviewsLeftDto)
    : generalTypes.APIResponse<apiResponses.IGetNReviewsLeftResponseDto> {
    return this.instance.post('/user/amount/reviews-left', targetData);
  }

  public getNthReviewLeft(targetData: generalTypes.IGetNthReviewLeftDto)
    : generalTypes.APIResponse<apiResponses.IGetNthReviewLeftResponseDto> {
    return this.instance.post('/user/get/nth-review-left', targetData);
  }

  public getTargetNReviewsGot(bodyData: generalTypes.IGetTargetNReviewsGotDto)
    : generalTypes.APIResponse<apiResponses.IGetTargetNReviewsGotResponseDto> {
    return this.instance.post('/user/access/amount/reviews-got', bodyData);
  }
}

export const apiClient = new ApiClient();
