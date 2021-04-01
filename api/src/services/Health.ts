import * as Constants from '@common/Constants';
import Types from '@types';

/**
  * Service for getting basic health status and current
  * API vesion information.
  */
export default class HealthService {
  /**
   * Get current API vesion.
   */
  public getHealthStatus = (): Types.HealthResponseDTO => ({
    message: 'Server is running',
    version: Constants.VERSION
  })
}
