import { ICompany, ICompanyMember } from 'utils/typing/general';

export function mergeMembersWithCompany(members: ICompanyMember[], company: ICompany) {
  return members.map(member => ({ ...member, company }));
}
