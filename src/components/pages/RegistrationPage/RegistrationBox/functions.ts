import { CompanyReduced } from 'utils/typing/general';

export function mapCompaniesDataToOptions(companies: CompanyReduced[]) {
  return companies.map(company => ({
    key: company.id,
    text: company.name,
    imageUrl: company.logoUrl
  }));
}
