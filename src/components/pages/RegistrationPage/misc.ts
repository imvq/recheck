import { IUserPreparationData } from 'commons/types';
import { apiClient } from 'commons/utils/services';

/**
 * When user press register we must call the API to perpare a new user.
 * Down here is a handler for registration page defining what to do after proceeding button
 * is clicked.
 */
export async function proceedHandler(profileInfo: IUserPreparationData) {
  return apiClient.prepareUser(profileInfo);
}
