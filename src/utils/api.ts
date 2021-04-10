/**
 * This module is responsible for API stuff.
 */

import axios from 'axios';

import { APIResponse } from './types.common';

/**
 * The API to communicate with the server.
 */
export default class Api {
  private static instance = axios.create({
    baseURL: process.env.REACT_APP_API
  });

  public static confirmAuthLinkedIn(code: string): APIResponse {
    const redirectPath = `${window.location.origin}/linkedin`;
    const body = { code, redirectPath };
    return Api.instance.post('/auth/confirm', body);
  }

  public static getProfile = () => Api.instance.get('/user/profile', { withCredentials: true });
}
