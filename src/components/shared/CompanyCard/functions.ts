import { Company, CompanyMember } from 'utils/typing/general';

export function mergeMembersWithCompany(members: CompanyMember[], company: Company) {
  return members.map(member => ({
    ...member,
    company: company.name
  }));
}
