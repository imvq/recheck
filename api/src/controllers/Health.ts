import { Path, GET, Context, ServiceContext } from 'typescript-rest';
import { JwtCookieGuard } from 'typescript-rest-jwt-guard';
import { Inject } from 'typescript-ioc';

import Types from '@types';
import Cookies from '@common/Cookies';
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

  /**
   * Getting basic health status and current API vesion
   * with am authenticated request.
   */
  @JwtCookieGuard(Cookies.BEARER)
  @Path('/secured')
  @GET
  public getHealthStatusSecured(@Context _context: ServiceContext):
    Types.HealthResponseDTO {
    return this.injectedService.getHealthStatusSecured();
  }
}
