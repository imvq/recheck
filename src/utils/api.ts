/**
 * This module is responsible for API stuff.
 */

import axios from 'axios';

import * as ApiResponses from './typing/apiResponses';
import * as GeneralTypes from './typing/general';

/**
 * The API to communicate with the server.
 */
export default class Api {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public static checkIsRegistered(profileId: string)
    : GeneralTypes.APIResponse<ApiResponses.CheckIsRegisteredResponseDto> {
    return Api.instance.post('/user/is-registered', { profileId });
  }

  public static checkIsConfirmed(profileId: string)
    : GeneralTypes.APIResponse<ApiResponses.CheckIsConfirmedResponseDto> {
    return Api.instance.post('/user/is-confirmed', { profileId });
  }

  public static completeRegistration(profileId: string, confirmationCode: string)
    : GeneralTypes.APIResponse<ApiResponses.CompleteRegistartionResponseDto> {
    return Api.instance.post('/user/confirm', { profileId, confirmationCode });
  }

  public static exchangeLinkedInCode(code: string)
    : GeneralTypes.APIResponse<ApiResponses.ExchangeLinkedInCodeResposneDto> {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/linkedin/oauth/exchange', body);
  }

  public static getProfileLinkedIn()
    : GeneralTypes.APIResponse<ApiResponses.LinkedInProfileDto> {
    return Api.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public static getProfileFacebook()
    : GeneralTypes.APIResponse<ApiResponses.FacebookProfileDto> {
    return Api.instance.get('/facebook/oauth/retrieve', { withCredentials: true });
  }

  public static prepareProfile(profileInfoDto: ApiResponses.RegistrationDto)
    : GeneralTypes.APIResponse<ApiResponses.PrepareUserResponseDto> {
    return Api.instance.post('/user/prepare', profileInfoDto);
  }

  public static prepareReview(reviewData: GeneralTypes.ReviewData)
    : GeneralTypes.APIResponse<ApiResponses.PrepareReviewResponseDto> {
    return Api.instance.post('/review/prepare', reviewData);
  }
}
