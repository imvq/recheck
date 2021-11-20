import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

import * as errors from '@business/errors';

import { database } from '@business/preloaded';

function sql(file: string) {
  const fullPath = joinPath(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

export async function createCompany(name: string | null) {
  if (name === null) {
    throw new errors.BadRequestError('No company name defined.');
  }

  try {
    const accessor = sql('./sql/create/company.sql');
    return await database.one(accessor, { name });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createUser(parameters: any) {
  try {
    const accessor = sql('./sql/create/user.sql');
    return await database.one(accessor, { ...parameters });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createNameToken(tokenValue: string) {
  try {
    const accessor = sql('./sql/create/nameToken.sql');
    return await database.one(accessor, { tokenValue });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createNameTokenBinding(userId: string, tokenId: string) {
  try {
    const accessor = sql('./sql/create/nameTokenBinding.sql');
    return await database.one(accessor, { userId, tokenId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createReview(authorId: string, targetShareableId: string, content: string) {
  try {
    const accessor = sql('./sql/create/review.sql');
    return await database.one(accessor, { authorId, targetShareableId, content });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createUserAvailability(ownerId: string, targetShareableId: string) {
  try {
    const accessor = sql('./sql/create/userAvailability.sql');
    return await database.one(accessor, { ownerId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readColleagues(companyId: string) {
  try {
    const accessor = sql('./sql/read/colleagues.sql');
    return await database.manyOrNone(accessor, { companyId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readCompaniesMatched(sequence: string) {
  try {
    const accessor = sql('./sql/read/companiesMatched.sql');
    return await database.manyOrNone(accessor, { sequence });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readEmail(email: string) {
  try {
    const accessor = sql('./sql/read/email.sql');
    return await database.oneOrNone(accessor, { email });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserByPrivateToken(privateToken: string) {
  try {
    const accessor = sql('./sql/read/userByPrivateToken.sql');
    return await database.one(accessor, { privateToken });
  } catch {
    throw new errors.ForbiddenError('Unacceptable private token.');
  }
}

export async function readUserWithCompanyBySocialId(socialId: string) {
  try {
    const accessor = sql('./sql/read/userWithCompanyBySocialId.sql');
    return await database.oneOrNone(accessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserBySocialId(socialId: string) {
  try {
    const accessor = sql('./sql/read/userBySocialId');
    return await database.oneOrNone(accessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUsersWithPredefinedCompanies(last: string) {
  try {
    const accessor = sql('./sql/read/userWithPredefinedCompanies');
    return await database.manyOrNone(accessor, { last });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserWithCompanyByShareableId(shareableId: string) {
  try {
    const accessor = sql('./sql/read/userWithCompanyByShareableId');
    return await database.oneOrNone(accessor, { shareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readConfirmationBySocialId(socialId: string) {
  try {
    const accessor = sql('./sql/read/confirmationBySocialId.sql');
    return await database.oneOrNone(accessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserAvailability(askerId: string, targetShareableId: string) {
  try {
    const accessor = sql('./sql/read/userAvailability.sql');
    return await database.oneOrNone(accessor, { askerId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readCompany(companyId: string) {
  try {
    const accessor = sql('./sql/read/company.sql');
    return await database.oneOrNone(accessor, { companyId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readNameToken(tokenValue: string) {
  try {
    const accessor = sql('./sql/read/nameToken.sql');
    return await database.oneOrNone(accessor, { tokenValue });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReceivedReviews(privateToken: string) {
  try {
    const accessor = sql('./sql/read/reviewsReceived.sql');
    return await database.manyOrNone(accessor, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readLeftReviewsAmount(authorId: string) {
  try {
    const accessor = sql('./sql/read/reviewsLeftAmount.sql');
    return await database.one(accessor, { authorId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readLeftReviews(privateToken: string) {
  try {
    const accessor = sql('./sql/read/reviewsLeft.sql');
    return await database.manyOrNone(accessor, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReceivedReviewsAmount(targetShareableId: string) {
  try {
    const accessor = sql('./sql/read/reviewsReceivedAmount.sql');
    return await database.one(accessor, { targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReview(authorId: string, targetShareableId: string) {
  try {
    const accessor = sql('./sql/read/review.sql');
    return await database.oneOrNone(accessor, { authorId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserWithCompanyByTokens(
  tokens: string[],
  options?: { limited: boolean; }
) {
  try {
    const accessor = options?.limited
      ? sql('./sql/read/userWithCompanyByTokensLimited.sql')
      : sql('./sql/read/userWithCompanyByTokens.sql');
    return await database.manyOrNone(accessor, { tokens });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function decreaseReviewsAvailable(privateToken: string) {
  try {
    const accessor = sql('./sql/update/decreaseReviewsAvailable.sql');
    return await database.none(accessor, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function updateEmail(privateToken: string, email: string) {
  try {
    const accessor = sql('./sql/update/email.sql');
    return await database.none(accessor, { privateToken, email });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function deleteConfirmation(confirmationCode: string) {
  try {
    const accessor = sql('./sql/delete/confirmation.sql');
    return await database.one(accessor, { confirmationCode });
  } catch {
    throw new errors.NotFoundError('Impossible to confirm provided code.');
  }
}
