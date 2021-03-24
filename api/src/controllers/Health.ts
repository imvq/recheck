import { Path, GET } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import Types from '@types';
import HealthService from '@services/Health';

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
  public getHealthStatus(): Types.HealthResponseDTO {
    return this.injectedService.getHealthStatus();
  }
}
