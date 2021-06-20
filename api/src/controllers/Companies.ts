import { Path, GET, POST } from 'typescript-rest';
import { Inject } from 'typescript-ioc';

import dto from '@dto';
import CompaniesService from '@services/Companies';
import * as apiResponses from '@typing/apiResponses';

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
  @GET
  public async getRecommendations()
    : Promise<apiResponses.IGetRecommendations> {
    return this.injectedService.getRecommendations();
  }

  @Path('/find-matched')
  @POST
  public async getMathedCompanies(bodyData: dto.GetMatchedCompaniesDto)
    : Promise<apiResponses.IGetMatchedCompanies> {
    return this.injectedService.getMatchedCompanies(bodyData);
  }
}
