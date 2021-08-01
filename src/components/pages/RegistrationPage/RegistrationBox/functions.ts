import { ICompanyReduced } from 'utils/typing/general';

export function mapCompaniesDataToOptions(companies: ICompanyReduced[]) {
  return companies.map(company => ({
    key: company.id,
    text: company.name,
    imageUrl: company.logoUrl
  }));
}
