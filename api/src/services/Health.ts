import * as Constants from '@common/Constants';
import * as ApiResponses from '@typing/apiResponses';

/**
  * Service for getting basic health status and current
  * API vesion information.
  */
export default class HealthService {
  /**
   * Get current API vesion.
   */
  public getHealthStatus = (): ApiResponses.IHealthResponseDTO => ({
    message: 'Server is running',
    version: Constants.VERSION
  })
}
