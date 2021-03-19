import Constants from '@common/Constants';
import Types from '@types';

/**
  * Service for getting basic health status and current
  * API vesion information.
  */
export default class HealthService {
  /**
   * Get current API vesion.
   *
   * @returns {Types.HealthResponseDTO} Response with status info.
   */
  public getHealthStatus = (): Types.HealthResponseDTO => ({
    message: 'Server is running',
    version: Constants.VERSION
  })

  /**
   * Get current API vesion and authentication status.
   *
   * @returns {Types.HealthResponseDTO} Response with status info.
   */
  public getHealthStatusSecured = (): Types.HealthResponseDTO => ({
    message: 'Server is running. The user is authenticated.',
    version: Constants.VERSION
  });
}
