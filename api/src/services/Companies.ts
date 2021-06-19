import * as apiResponses from '@typing/apiResponses';

import CompanyManager from '@database/managers/CompanyManager';

export default class CompaniesService {
  public async getRecommendations()
    : Promise<apiResponses.IGetRecommendations> {
    const companies = await CompanyManager.getPredefinedCompanies();

    // Recommended company is guaranteed to have a logo.
    // @ts-ignore
    return { results: companies };
  }
}
