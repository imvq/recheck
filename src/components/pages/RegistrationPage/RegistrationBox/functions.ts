import { CompanyReduced } from 'utils/typing/general';

export function mapCompaniesDataToOptions(companies: CompanyReduced[]) {
  return companies.map(company => ({
    key: company.id,
    text: company.name,
    logoUrl: company.logoUrl
  }));
}

export function isValidEmail(email: string): boolean {
  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
    .test(email.toLowerCase());
}
