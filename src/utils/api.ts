/**
 * This module is responsible for API stuff.
 */

import axios from 'axios';

import { APIResponse, RegistrationDto } from './types.common';

/**
 * The API to communicate with the server.
 */
export default class Api {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public static getProfileLinkedIn(): APIResponse {
    return Api.instance.get('/linkedin/oauth/retrieve', { withCredentials: true });
  }

  public static confirmAuthLinkedIn(code: string): APIResponse {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/auth/confirm/linkedin', body);
  }

  public static prepareProfile(profileInfoDto: RegistrationDto): APIResponse {
    return Api.instance.post('/user/prepare', profileInfoDto);
  }

  public static registerProfile(profileId: string): APIResponse {
    return Api.instance.post('/user/register', { profileId });
  }
}
