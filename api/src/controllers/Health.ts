import { Path, GET } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import HealthService from '@services/Health';

import * as apiResponses from '@typing/apiResponses';

/**
 * Default controller in charge of checking the API.
 */
@Path('/health')
export default class HealthController {
  public constructor(@Inject private readonly injectedService: HealthService) {}

  /**
   * Getting basic health status and current API vesion
   * with a simple GET request.
   */
  @GET
  public async getHealthStatus(): Promise<apiResponses.IHealthResponseDTO> {
    return this.injectedService.getHealthStatus();
  }
}
