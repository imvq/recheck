import { getRepository, Repository } from 'typeorm';
import { Errors } from 'typescript-rest';

import * as utilityTypes from '@typing/utility';
import * as generalTypes from '@typing/general';
import * as constants from '@common/constants';
import NameToken from '../entities/NameToken.entity';

/**
 * Class providing operations with NameToken entity.
 */
export default class NameTokenManager {
  private static repo: utilityTypes.Nullable<Repository<NameToken>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    NameTokenManager.repo = getRepository(NameToken);
  }
}
