import { getRepository, Repository, Not, IsNull } from 'typeorm';

import * as utilityTypes from '@typing/utility';
import * as generalTypes from '@typing/general';
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

  public static async getCompanyByFullPublicInfo(name: string)
    : Promise<utilityTypes.Optional<Company>> {
    return CompanyManager.repo?.findOne({ where: { name } });
  }

  public static async getPredefinedCompanies()
    : Promise<Company[]> {
    return CompanyManager.repo?.find({ relations: ['members'], where: { logoUrl: Not(IsNull()) } }) || [];
  }

  public static async getMatched(sequence: string)
    : Promise<Company[]> {
    return CompanyManager.repo?.createQueryBuilder('companies')
      .where('companies.name LIKE :name', { name: `${sequence}%` })
      .getMany()
      || [];
  }
}
