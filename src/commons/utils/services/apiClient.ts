import axios from 'axios';

import * as commonTypes from 'commons/types';

import { ApiPromise } from 'commons/types';
import { UserRole } from 'commons/types/unions';

const apiInstance = axios.create({ baseURL: process.env.REACT_APP_API });

interface ISimpleBooleanResponse {
  success: boolean;
}

interface IAccesstokenResponse {
  accessToken: string;
}

interface IAmountResponse {
  result: number;
}

export function exchangeLinkedInCode(authCode: string, redirectPath: string)
  : ApiPromise<IAccesstokenResponse> {
  return apiInstance.post('/login/linkedin/exchange', { authCode, redirectPath });
}

export function retrieveProfile(accessToken: string, role: UserRole)
  : ApiPromise<commonTypes.IUserSelf> {
  return apiInstance.get(`/users/profile/${role}/${accessToken}`, { withCredentials: true });
}

export function checkIfEmailIsAvailable(email: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/users/availability/email', { email });
}

export function checkIfUserCanBeViewed(privateToken: string, targetShareableId: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/users/availability/user', { privateToken, targetShareableId });
}

export function checkIfUserHasViewsAvailable(privateToken: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/users/availability/views', { privateToken });
}

export function checkIfUserCanLeaveReview(privateToken: string, targetShareableId: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.get(`/users/${privateToken}/availability/review/${targetShareableId}`);
}

export function makeUserAvailable(privateToken: string, targetShareableId: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/availability/user/provide', { privateToken, targetShareableId });
}

export function loadAssociatedUsers(privateToken: string, last: number)
  : ApiPromise<(commonTypes.ISearchedProfile & { id: string; })[]> {
  return apiInstance.post(`/users/associated/${last}`, { privateToken });
}

export function loadAvailableUsers(privateToken: string, last: number)
  : ApiPromise<(commonTypes.ISearchedProfile & { id: string; })[]> {
  return apiInstance.post(`/users/available/${last}`, { privateToken });
}

export function prepareUser(preparationData: commonTypes.IUserPreparationData)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/users/registration/prepare', preparationData);
}

export function resendConfirmation(privateToken: string, updatedEmail?: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/users/registration/confirming/resend', { privateToken, updatedEmail });
}

export function completeRegistration(confirmationCode: string)
  : ApiPromise<ISimpleBooleanResponse> {
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

export function loadPredefinedCompanies(privateToken: string, last: number)
  : ApiPromise<commonTypes.ICompanyWithMembers[]> {
  return apiInstance.post(`/search/predefined/companies/${last}`, { privateToken });
}

export function checkIsUserAvailableForReview(privateToken: string, targetShareableId: string)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/reviews/availability', { privateToken, targetShareableId });
}

export function getReceivedReviewsAmount(privateToken: string)
  : ApiPromise<IAmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/received/amount`);
}

export function getObservedReviewsAmount(privateToken: string, shareableId: string)
  : ApiPromise<IAmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/${shareableId}/received/amount`);
}

export function getNthReceivedReview(privateToken: string, n: number | string)
  : ApiPromise<commonTypes.IReviewReceived> {
  return apiInstance.get(`/reviews/${privateToken}/received/${n}`);
}

export function getNthObservedReview(privateToken: string, shareableId: string, n: number | string)
  : ApiPromise<commonTypes.IReviewReceived> {
  return apiInstance.get(`/reviews/${privateToken}/${shareableId}/received/${n}`);
}

export function getNthLeftReview(privateToken: string, n: number | string)
  : ApiPromise<commonTypes.IReviewReceived> {
  return apiInstance.get(`/reviews/${privateToken}/left/${n}`);
}

export function getLeftReviewsAmount(privateToken: string)
  : ApiPromise<IAmountResponse> {
  return apiInstance.get(`/reviews/${privateToken}/left/amount`);
}

export function getColleagues(privateToken: string)
  : ApiPromise<commonTypes.ISearchedProfileBasic[]> {
  return apiInstance.post('/users/colleagues', { privateToken });
}

export function createReview(
  privateToken: string,
  authorCompanyAtm: string,
  authorPositionAtm: string,
  authorEmailAtm: string,
  targetShareableId: string,
  content: string
)
  : ApiPromise<ISimpleBooleanResponse> {
  return apiInstance.post('/reviews/create', {
    privateToken, authorCompanyAtm, authorPositionAtm, authorEmailAtm, targetShareableId, content
  });
}
