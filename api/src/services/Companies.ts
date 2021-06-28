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

    // TypeORM cannot select many rows properly if the primary key is not provided.
    // So we need to select with the primary key and than remove it.
    const results = this.mapCompaniesToCompaniesWithRawMembers(companies);

    // Recommended company is guaranteed to have a logo.
    // @ts-ignore
    return { results };
  }

  private mapCompaniesToCompaniesWithRawMembers(companies: Company[]) {
    return companies.map(company => ({
      id: company.id,
      name: company.name,
      logoUrl: company.logoUrl,
      members: company.members.map(member => ({
        name: member.name,
        email: member.email,
        photoUrl: member.photoUrl,
        position: member.position
      }))
    }));
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
