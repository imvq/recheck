import dto from '@dto';
import utils from '@utils';
import logger from '@business/logging';
import Company from '@database/entities/Company.entity';
import CompanyManager from '@database/managers/CompanyManager';

export default class CompaniesService {
  @utils.errorsAutoHandler({ except: [], logger })
  public async getRecommendations(bodyData: dto.GetRecommendationsDto) {
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
        shareableId: member.shareableId,
        photoUrl: member.photoUrl,
        position: member.position
      }))
    }));
  }

  @utils.errorsAutoHandler({ except: [], logger })
  public async getMatchedCompanies(bodyData: dto.GetMatchedCompaniesDto) {
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
