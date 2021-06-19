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

  public static checkIsRegistered(profileId: string)
    : generalTypes.APIResponse<apiResponses.CheckIsRegisteredResponseDto> {
    return Api.instance.post('/user/is-registered', { profileId });
  }

  public static checkIsConfirmed(profileId: string)
    : generalTypes.APIResponse<apiResponses.CheckIsConfirmedResponseDto> {
    return Api.instance.post('/user/is-confirmed', { profileId });
  }

  public static getRecommendations()
    : generalTypes.APIResponse<apiResponses.GetRecommendationsDto> {
    return Api.instance.get('/companies/recommendations');
  }

  public static searchUser(name: string)
    : generalTypes.APIResponse<{ results: apiResponses.SearchUserDto[]; }> {
    return Api.instance.post('/user/search', { name });
  }

  public static completeRegistration(completionDto: generalTypes.CompleteRegistrationDto)
    : generalTypes.APIResponse<apiResponses.CompleteRegistartionResponseDto> {
    return Api.instance.post('/user/confirm', completionDto);
  }

  public static exchangeLinkedInCode(code: string)
    : generalTypes.APIResponse<apiResponses.ExchangeLinkedInCodeResposneDto> {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/linkedin/oauth/exchange', body);
  }

  public static getProfileLinkedIn()
    : generalTypes.APIResponse<apiResponses.LinkedInProfileDto> {
    return Api.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public static getProfileFacebook()
    : generalTypes.APIResponse<apiResponses.FacebookProfileDto> {
    return Api.instance.get('/facebook/oauth/retrieve', { withCredentials: true });
  }

  public static prepareProfile(profileInfoDto: generalTypes.PrepareProfileDto)
    : generalTypes.APIResponse<apiResponses.PrepareProfileResponseDto> {
    return Api.instance.post('/user/prepare', profileInfoDto);
  }

  public static prepareReview(reviewData: generalTypes.ReviewData)
    : generalTypes.APIResponse<apiResponses.PrepareReviewResponseDto> {
    return Api.instance.post('/review/prepare', reviewData);
  }

  public static bindReviewTarget(bindingData: generalTypes.BindReviewTargetDto)
    : generalTypes.APIResponse<apiResponses.BindReviewtargetResponseDto> {
    return Api.instance.post('/review/bind-target', bindingData);
  }

  public static getNReviewsGot(targetData: generalTypes.GetNReviewsGotDto)
    : generalTypes.APIResponse<apiResponses.GetNReviewsGotResponseDto> {
    return Api.instance.post('/user/amount/reviews-got', targetData);
  }

  public static getNthReviewGot(targetData: generalTypes.GetNthReviewGotDto)
    : generalTypes.APIResponse<apiResponses.GetNthReviewGotResponseDto> {
    return Api.instance.post('/user/get/nth-review-got', targetData);
  }

  public static getNReviewsLeft(targetData: generalTypes.GetNReviewsLeftDto)
    : generalTypes.APIResponse<apiResponses.GetNReviewsLeftResponseDto> {
    return Api.instance.post('/user/amount/reviews-left', targetData);
  }

  public static getNthReviewLeft(targetData: generalTypes.GetNthReviewLeftDto)
    : generalTypes.APIResponse<apiResponses.GetNthReviewLeftResponseDto> {
    return Api.instance.post('/user/get/nth-review-left', targetData);
  }
}
