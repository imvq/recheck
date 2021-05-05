/**
 * This module is responsible for API stuff.
 */

import axios from 'axios';

import * as Types from './types.common';

/**
 * The API to communicate with the server.
 */
export default class Api {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public static checkIsRegistered(profileId: string)
    : Types.APIResponse<Types.CheckIsRegisteredResponseDto> {
    return Api.instance.post('/user/is-registered', { profileId });
  }

  public static exchangeLinkedInCode(code: string)
    : Types.APIResponse<Types.ExchangeLinkedInCodeResposneDto> {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/linkedin/oauth/exchange', body);
  }

  public static getProfileLinkedIn()
    : Types.APIResponse<Types.LinkedInProfileDto> {
    return Api.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public static getProfileFacebook()
    : Types.APIResponse<Types.FacebookProfileDto> {
    return Api.instance.get('/facebook/oauth/retrieve', { withCredentials: true });
  }

  public static prepareProfile(profileInfoDto: Types.RegistrationDto)
    : Types.APIResponse<Types.PrepareUserResponseDto> {
    return Api.instance.post('/user/prepare', profileInfoDto);
  }

  public static prepareReview(reviewData: Types.ReviewData)
    : Types.APIResponse<Types.PrepareReviewResponseDto> {
    return Api.instance.post('/review/prepare', reviewData);
  }
}
