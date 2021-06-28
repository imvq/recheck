import { getRepository, Repository, Not, IsNull } from 'typeorm';

import * as utilityTypes from '@typing/utility';
import * as generalTypes from '@typing/general';
import * as constants from '@common/constants';
import Company from '../entities/Company.entity';

/**
 * Class providing operations with Company entity.
 */
export default class CompanyManager {
  private static repo: utilityTypes.Nullable<Repository<Company>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    CompanyManager.repo = getRepository(Company);
  }

  public static async createCompany(companyData: generalTypes.CompanyData)
    : Promise<Company> {
    return CompanyManager.repo
      ?.save(CompanyManager.repo.create({ ...companyData })) as Promise<Company>;
  }

  public static async getCompany(id: number)
    : Promise<utilityTypes.Optional<Company>> {
    return CompanyManager.repo?.findOne(id);
  }

  public static async getCompanyByFullPublicInfo(name: string)
    : Promise<utilityTypes.Optional<Company>> {
    return CompanyManager.repo?.findOne({ where: { name } });
  }

  public static async getPredefinedCompanies(chunk: number)
    : Promise<Company[]> {
    return CompanyManager.repo?.createQueryBuilder('companies')
      .where({ logoUrl: Not(IsNull()) })
      .skip(constants.RECOMMENDATIONS_DEFAULT_LENGHT * chunk)
      .take(constants.RECOMMENDATIONS_DEFAULT_LENGHT)
      .getMany() || [];
  }

  public static async getMatched(sequence: string)
    : Promise<Company[]> {
    return CompanyManager.repo?.createQueryBuilder('companies')
      .where('companies.name LIKE :name', { name: `${sequence}%` })
      .limit(10)
      .getMany()
      || [];
  }
}
