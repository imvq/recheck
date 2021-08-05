/**
 * This module is responsible for API stuff.
 */

import axios from 'axios';

import * as apiResponses from './typing/apiResponses';
import * as generalTypes from './typing/general';

/**
 * The API to communicate with the server.
 */
export default class Api {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public static checkIsEmailAvailable(email: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsEmailAvailableResponseDto> {
    return Api.instance.post('/user/availability/email', { email });
  }

  public static checkIsUserAvailableForReview(
    checkData: generalTypes.ICheckIsUserAvailableForReviewDto
  ): generalTypes.APIResponse<apiResponses.ICheckIsUserAvailableForReviewResponseDto> {
    return Api.instance.post('/user/availability/review', checkData);
  }

  public static checkIsRegistered(profileId: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsRegisteredResponseDto> {
    return Api.instance.post('/user/is-registered', { profileId });
  }

  public static checkIsConfirmed(profileId: string)
    : generalTypes.APIResponse<apiResponses.ICheckIsConfirmedResponseDto> {
    return Api.instance.post('/user/is-confirmed', { profileId });
  }

  public static checkIsTargetConnected(connectionData: generalTypes.IGetConnectedUserDataDto)
    : generalTypes.APIResponse<apiResponses.IIsTargetConnectedResponseDto> {
    return Api.instance.post('/user/target/is-connected', connectionData);
  }

  public static getColleagues(profileId: string)
    : generalTypes.APIResponse<apiResponses.IGetColleaguesResponseDto> {
    return Api.instance.post('/user/get/colleagues', { profileId });
  }

  public static getMatchedCompanies(sequence: string)
    : generalTypes.APIResponse<apiResponses.IGetMatchedCompaniesResponseDto> {
    return Api.instance.post('/companies/find-matched', { sequence });
  }

  public static getRecommendations(chunk: number)
    : generalTypes.APIResponse<apiResponses.IGetRecommendationsResponseDto> {
    return Api.instance.post('/companies/recommendations', { chunk });
  }

  public static makeUserAvailable(bodyData: generalTypes.IMakeUserAvailableDto)
    : generalTypes.APIResponse<apiResponses.IMakeUserAvailableResponseDto> {
    return Api.instance.post('/user/availability/profile/provide', bodyData);
  }

  public static quickSearchUser(tokens: string[])
    : generalTypes.APIResponse<{ results: apiResponses.ISearchUserDto[]; }> {
    return Api.instance.post('/user/quick-search', { tokens });
  }

  public static searchUser(tokens: string[])
    : generalTypes.APIResponse<{ results: apiResponses.ISearchUserDto[]; }> {
    return Api.instance.post('/user/search', { tokens });
  }

  public static searchUserByShareableId(shareableId: string)
    : generalTypes.APIResponse<{ result: apiResponses.ISearchUserDto; }> {
    return Api.instance.post('/user/search/by/shareable-id', { shareableId });
  }

  public static completeRegistration(completionDto: generalTypes.ICompleteRegistrationDto)
    : generalTypes.APIResponse<apiResponses.ICompleteRegistartionResponseDto> {
    return Api.instance.post('/user/confirm', completionDto);
  }

  public static exchangeLinkedInCode(code: string)
    : generalTypes.APIResponse<apiResponses.IExchangeLinkedInCodeResposneDto> {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/linkedin/oauth/exchange', body);
  }

  public static getProfileLinkedIn()
    : generalTypes.APIResponse<apiResponses.ILinkedInProfileDto> {
    return Api.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public static getProfileFacebook()
    : generalTypes.APIResponse<apiResponses.IFacebookProfileDto> {
    return Api.instance.get('/facebook/oauth/retrieve', { withCredentials: true });
  }

  public static getProfileFacebookReduced(profileId: string)
    : generalTypes.APIResponse<apiResponses.IFacebookProfileReducedDto> {
    return Api.instance.post('/facebook/oauth/retrieve-reduced', { profileId });
  }

  public static prepareProfile(profileInfoDto: generalTypes.IPrepareProfileDto)
    : generalTypes.APIResponse<apiResponses.IPrepareProfileResponseDto> {
    return Api.instance.post('/user/prepare', profileInfoDto);
  }

  public static resendConfirmation(profileId: string)
    : generalTypes.APIResponse<apiResponses.IResendConfirmationResponseDto> {
    return Api.instance.post('/user/confirmation/resend', { profileId });
  }

  public static reassignConfirmationEmail(reassignDto: generalTypes.IReassignConfirmationEmailDto)
    : generalTypes.APIResponse<apiResponses.IReassignConfirmationEmailResponseDto> {
    return Api.instance.post('/user/confirmation/reassign', reassignDto);
  }

  public static prepareReview(reviewData: generalTypes.IReviewData)
    : generalTypes.APIResponse<apiResponses.IPrepareReviewResponseDto> {
    return Api.instance.post('/review/prepare', reviewData);
  }

  public static bindReviewTarget(bindingData: generalTypes.IBindReviewTargetDto)
    : generalTypes.APIResponse<apiResponses.IBindReviewtargetResponseDto> {
    return Api.instance.post('/review/bind-target', bindingData);
  }

  public static getNReviewsGot(targetData: generalTypes.IGetNReviewsGotDto)
    : generalTypes.APIResponse<apiResponses.IGetNReviewsGotResponseDto> {
    return Api.instance.post('/user/amount/reviews-got', targetData);
  }

  public static getNthReviewGot(targetData: generalTypes.IGetNthReviewGotDto)
    : generalTypes.APIResponse<apiResponses.IGetNthReviewGotResponseDto> {
    return Api.instance.post('/user/get/nth-review-got', targetData);
  }

  public static getNReviewsLeft(targetData: generalTypes.IGetNReviewsLeftDto)
    : generalTypes.APIResponse<apiResponses.IGetNReviewsLeftResponseDto> {
    return Api.instance.post('/user/amount/reviews-left', targetData);
  }

  public static getNthReviewLeft(targetData: generalTypes.IGetNthReviewLeftDto)
    : generalTypes.APIResponse<apiResponses.IGetNthReviewLeftResponseDto> {
    return Api.instance.post('/user/get/nth-review-left', targetData);
  }

  public static getTargetNReviewsGot(bodyData: generalTypes.IGetTargetNReviewsGotDto)
    : generalTypes.APIResponse<apiResponses.IGetTargetNReviewsGotResponseDto> {
    return Api.instance.post('/user/access/amount/reviews-got', bodyData);
  }
}
