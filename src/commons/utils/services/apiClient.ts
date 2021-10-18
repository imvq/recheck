import axios from 'axios';

import * as commonTypes from 'commons/types';

import { ApiPromise } from 'commons/types';

const apiInstance = axios.create({ baseURL: process.env.REACT_APP_API });

interface SimpleBooleanResponse {
  success: boolean;
}

export function retrieveProfile(): ApiPromise<commonTypes.IUserSelf> {
  return apiInstance.get('/users/profile', { withCredentials: true });
}

export function checkIfEmailIsAvailable(email: string): ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/availability/email', email);
}

export function prepareUser(preparationData: commonTypes.IUserPreparationData)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/prepare', preparationData);
}
