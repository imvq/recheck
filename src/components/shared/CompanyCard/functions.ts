import { ICompany, ICompanyMember } from 'commons/types/general';

export function mergeMembersWithCompany(members: ICompanyMember[], company: ICompany) {
  return members.map(member => ({ ...member, company }));
}
