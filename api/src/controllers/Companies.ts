import { Path, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import dto from '@dto';
import CompaniesService from '@services/Companies';

/**
 * Default controller in charge of companies.
 */
@Path('/companies')
export default class CompaniesController {
  public constructor(@Inject private readonly injectedService: CompaniesService) {}

  /**
   * Get recommended predefined companies.
   */
  @Path('/recommendations')
  @POST
  public async getRecommendations(bodyData: dto.GetRecommendationsDto) {
    return this.injectedService.getRecommendations(bodyData);
  }

  @Path('/find-matched')
  @POST
  public async getMathedCompanies(bodyData: dto.GetMatchedCompaniesDto) {
    return this.injectedService.getMatchedCompanies(bodyData);
  }
}
