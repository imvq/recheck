/**
 * This module is responsible for API stuff.
 */

import axios from 'axios';

import {
  APIResponse,
  CheckIsRegisteredResponseDto,
  RegistrationDto
} from './types.common';

/**
 * The API to communicate with the server.
 */
export default class Api {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public static checkIsRegistered(profileId: string)
    : APIResponse<CheckIsRegisteredResponseDto> {
    return Api.instance.post('/user/is-registered', { profileId });
  }

  public static exchangeLinkedInCode(code: string): APIResponse {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/linkedin/oauth/exchange', body);
  }

  public static getProfileLinkedIn(): APIResponse {
    return Api.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public static getProfileFacebook(): APIResponse {
    return Api.instance.post('https://graph.facebook.com/v10.0/{person-id}/');
  }

  public static prepareProfile(profileInfoDto: RegistrationDto): APIResponse {
    return Api.instance.post('/user/prepare', profileInfoDto);
  }

  public static registerProfile(profileId: string): APIResponse {
    return Api.instance.post('/user/register', { profileId });
  }
}
