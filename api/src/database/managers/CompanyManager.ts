import { getRepository, Repository } from 'typeorm';

import * as UtilityTypes from '@typing/utility';
import * as GeneralTypes from '@typing/general';
import Company from '../entities/Company.entity';

/**
 * Class providing operations with Company entity.
 */
export default class CompanyManager {
  private static repo: UtilityTypes.Nullable<Repository<Company>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    CompanyManager.repo = getRepository(Company);
  }

  public static createCompany = async (companyData: GeneralTypes.CompanyData) => (
    CompanyManager.repo?.save(CompanyManager.repo.create({ ...companyData })) as Promise<Company>
  )

  public static getCompanyByFullPublicInfo = async (name: string, site: string) => (
    CompanyManager.repo?.findOne({ where: { name, site } })
  )
}
