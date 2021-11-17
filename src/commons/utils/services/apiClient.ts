import axios from 'axios';

import * as commonTypes from 'commons/types';

import { ApiPromise } from 'commons/types';

const apiInstance = axios.create({ baseURL: process.env.REACT_APP_API });

interface SimpleBooleanResponse {
  success: boolean;
}

interface AccesstokenResponse {
  accessToken: string;
}

interface AmountResponse {
  result: number;
}

export function exchangeLinkedInCode(authCode: string, redirectPath: string)
  : ApiPromise<AccesstokenResponse> {
  return apiInstance.post('/login/linkedin/exchange', { authCode, redirectPath });
}

export function retrieveProfile(): ApiPromise<commonTypes.IUserSelf> {
  return apiInstance.get('/users/profile', { withCredentials: true });
}

export function checkIfEmailIsAvailable(email: string)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/availability/email', email);
}

export function checkIfUserCanBeViewed(privateToken: string, targetShareableId: string)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/availability/user', { privateToken, targetShareableId });
}

export function prepareUser(preparationData: commonTypes.IUserPreparationData)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/registration/prepare', preparationData);
}

export function resendConfirmation(privateToken: string, updatedEmail?: string)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/registration/confirming/resend', { privateToken, updatedEmail });
}

export function completeRegistration(confirmationCode: string)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/users/registration/confirming/apply', { confirmationCode });
}

export function searchUserByShareableId(shareableId: string)
  : ApiPromise<commonTypes.ISearchProfileData> {
  return apiInstance.post('/search/user', { shareableId });
}

export function getReceivedReviewsAmount(privateToken: string)
  : ApiPromise<AmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/received/amount`);
}

export function getLeftReviewsAmount(privateToken: string)
  : ApiPromise<AmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/left/amount`);
}
