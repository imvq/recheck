import { getRepository, Repository } from 'typeorm';

import Types from '@types';
import Company from '../entities/Company.entity';

/**
 * Class providing operations with Company entity.
 */
export default class CompanyManager {
  private static repo: Types.Nullable<Repository<Company>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    CompanyManager.repo = getRepository(Company);
  }

  public static createCompany = async (companyData: Types.CompanyData) => (
    CompanyManager.repo?.save(CompanyManager.repo.create({ ...companyData })) as Promise<Company>
  )

  public static getCompanyByFullPublicInfo = async (name: string, site: string) => (
    CompanyManager.repo?.findOne({ where: { name, site } })
  )
}
