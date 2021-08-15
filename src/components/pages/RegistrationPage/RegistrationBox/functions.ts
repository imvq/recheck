import { ICompanyReduced } from 'commons/types/general';

export function mapCompaniesDataToOptions(companies: ICompanyReduced[]) {
  return companies.map(company => ({
    key: company.id,
    text: company.name,
    imageUrl: company.logoUrl
  }));
}
