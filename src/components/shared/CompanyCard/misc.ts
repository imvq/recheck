import { ICompanyWithMembers, ISearchedProfileBasic, ISearchedProfile } from 'commons/types';

export function mergeMembersWithCompany(
  members: ISearchedProfileBasic[],
  company: ICompanyWithMembers
): ISearchedProfile[] {
  return members.map(member => ({
    ...member,
    currentCompanyId: company.id,
    currentCompanyName: company.name || ''
  }));
}
