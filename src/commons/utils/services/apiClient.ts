import axios from 'axios';

import * as commonTypes from 'commons/types';

import { ApiPromise } from 'commons/types';

const apiInstance = axios.create({ baseURL: process.env.REACT_APP_API });

export function retrieveProfile(): ApiPromise<commonTypes.IUserSelf> {
  return apiInstance.get('/user/profile', { withCredentials: true });
}
