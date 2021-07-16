import { getRepository } from 'typeorm';

import * as utilityTypes from '@typing/utility';
import * as generalTypes from '@typing/general';
import * as constants from '@common/constants';
import Company from '../entities/Company.entity';

/**
 * Class providing operations with Company entity.
 */
export default class CompanyManager {
  public static async createCompany(companyData: generalTypes.CompanyData)
    : Promise<Company> {
    const repository = getRepository(Company);
    const toBeSaved = repository.create({ ...companyData });

    return repository.save(toBeSaved);
  }

  public static async getCompany(id: number)
    : Promise<utilityTypes.Optional<Company>> {
    return getRepository(Company).findOne(id);
  }

  public static async getCompanyByFullPublicInfo(name: string)
    : Promise<utilityTypes.Optional<Company>> {
    return getRepository(Company).findOne({ where: { name } });
  }

  public static async getPredefinedCompanies(chunk: number)
    : Promise<Company[]> {
    const repository = getRepository(Company);

    const mainSubquery = repository
      .createQueryBuilder('companies')
      .innerJoin('companies.members', 'members')
      .where('companies.logoUrl IS NOT NULL')
      .groupBy('members.companyId')
      .select('members.companyId as id')
      .addSelect('COUNT(*) as membersAmount');

    return repository
      .createQueryBuilder('companies')
      .innerJoin(`(${mainSubquery.getQuery()})`, 'filtered', 'filtered.id = companies.id')
      .orderBy('membersAmount', 'DESC')
      .skip(constants.RECOMMENDATIONS_DEFAULT_LENGHT * chunk)
      .take(constants.RECOMMENDATIONS_DEFAULT_LENGHT)
      .select('companies')
      .addSelect('membersAmount')
      .addSelect('members.profileId')
      .addSelect('members.name')
      .addSelect('members.email')
      .addSelect('members.photoUrl')
      .addSelect('members.position')
      .innerJoin('companies.members', 'members')
      .getMany() || [];
  }

  public static async getMatched(sequence: string)
    : Promise<Company[]> {
    return getRepository(Company)
      .createQueryBuilder('companies')
      .where('companies.name LIKE :name', { name: `${sequence}%` })
      .limit(10)
      .getMany()
      || [];
  }
}
