import * as apiResponses from '@typing/apiResponses';

import dto from '@dto';
import utils from '@utils';
import logger from '@logging/Logger';
import Company from '@database/entities/Company.entity';
import CompanyManager from '@database/managers/CompanyManager';

export default class CompaniesService {
  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async getRecommendations(bodyData: dto.GetRecommendationsDto)
    : Promise<apiResponses.IGetRecommendations> {
    const companies = await CompanyManager.getPredefinedCompanies(bodyData.chunk);

    // Recommended company is guaranteed to have a logo.
    // @ts-ignore
    return { results: companies };
  }

  @utils.dbErrorDefaultReactor({ except: [], logger })
  public async getMatchedCompanies(bodyData: dto.GetMatchedCompaniesDto)
    : Promise<apiResponses.IGetMatchedCompanies> {
    const matched = await CompanyManager.getMatched(bodyData.sequence);
    return { results: this.mapMatchedToPlainInfo(matched) };
  }

  private mapMatchedToPlainInfo(companies: Company[]) {
    return companies.map(company => ({
      id: company.id,
      name: company.name,
      logoUrl: company.logoUrl
    }));
  }
}
