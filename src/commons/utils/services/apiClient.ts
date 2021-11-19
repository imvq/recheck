import axios from 'axios';

import * as commonTypes from 'commons/types';

import { ApiPromise, ISearchedProfile } from 'commons/types';

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

export function makeUserAvailable(privateToken: string, targetShareableId: string)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/availability/user/provide', { privateToken, targetShareableId });
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
  : ApiPromise<commonTypes.ISearchedProfile> {
  return apiInstance.get(`/search/user/${shareableId}`);
}

export function searchUsersByTokens(tokens: string[])
  : ApiPromise<commonTypes.ISearchedProfile[]> {
  return apiInstance.post('/search/users/tokens', { tokens });
}

export function quickSearchUsersByTokens(tokens: string[])
  : ApiPromise<commonTypes.ISearchedProfile[]> {
  return apiInstance.post('/search/quick/users/tokens', { tokens });
}

export function quickSearchCompanies(sequence: string)
  : ApiPromise<commonTypes.ICompany[]> {
  return apiInstance.post('/search/quick/companies', { sequence });
}

export function loadPredefinedCompanies(last: number)
  : ApiPromise<commonTypes.ICompanyWithMembers[]> {
  return apiInstance.get(`/search/predefined/companies/${last}`);
}

export function getReceivedReviewsAmount(privateToken: string)
  : ApiPromise<AmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/received/amount`);
}

export function getNthReceivedReview(privateToken: string, n: number | string)
  : ApiPromise<commonTypes.IReviewReceived> {
  return apiInstance.get(`/reviews/${privateToken}/received/${n}`);
}

export function getNthLeftReview(privateToken: string, n: number | string)
  : ApiPromise<commonTypes.IReviewReceived> {
  return apiInstance.get(`/reviews/${privateToken}/left/${n}`);
}

export function getLeftReviewsAmount(privateToken: string)
  : ApiPromise<AmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/left/amount`);
}

export function getColleagues(privateToken: string)
  : ApiPromise<commonTypes.ISearchedProfileBasic[]> {
  return apiInstance.post('/users/colleagues', privateToken);
}

export function createReview(privateToken: string, targetShareableId: string, content: string)
  : ApiPromise<SimpleBooleanResponse> {
  return apiInstance.post('/reviews/create', { privateToken, targetShareableId, content });
}
