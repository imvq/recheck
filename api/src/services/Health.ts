import * as constants from '@common/constants';
import * as apiResponses from '@typing/apiResponses';

/**
  * Service for getting basic health status and current
  * API vesion information.
  */
export default class HealthService {
  /**
   * Get current API vesion.
   */
  public getHealthStatus = (): apiResponses.IHealthResponseDTO => ({
    message: 'Server is running',
    version: constants.VERSION
  })
}
