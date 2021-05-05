import { getRepository, Repository } from 'typeorm';

import * as UtilityTypes from '@typing/utility';
import User from '../entities/User.entity';
import Confirmation from '../entities/Confirmation.entity';

/**
 * Class providing operations with Confirmation entity.
 */
export default class ConfirmationManager {
  private static repo: UtilityTypes.Nullable<Repository<Confirmation>> = null;

  // Must be invoked after connection being established.
  public static loadRepository() {
    ConfirmationManager.repo = getRepository(Confirmation);
  }

  public static createConfirmation = async (forUser: User, code: number) => (
    ConfirmationManager.repo?.save(ConfirmationManager.repo.create({ user: forUser, code }))
  )

  public static getConfirmation = async (id: number) => (
    ConfirmationManager.repo?.findOne(id)
  )
}
