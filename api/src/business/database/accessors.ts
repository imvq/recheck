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
    return database.one(accessor, { name });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createUser(parameters: any) {
  try {
    const accessor = sql('./sql/create/user.sql');
    return database.one(accessor, { ...parameters });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createNameToken(tokenValue: string) {
  try {
    const accessor = sql('./sql/create/nameToken.sql');
    return database.one(accessor, { tokenValue });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createNameTokenBinding(userId: string, tokenId: string) {
  try {
    const accessor = sql('./sql/create/nameTokenBinding.sql');
    return database.one(accessor, { userId, tokenId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createReview(authorId: string, targetShareableId: string, content: string) {
  try {
    const accessor = sql('./sql/create/review.sql');
    return database.one(accessor, { authorId, targetShareableId, content });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readColleagues(companyId: string) {
  try {
    const accessor = sql('./sql/read/colleagues.sql');
    return database.manyOrNone(accessor, { companyId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readCompaniesMatched(sequence: string) {
  try {
    const accessor = sql('./sql/read/companiesMatched.sql');
    return database.manyOrNone(accessor, { sequence });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readEmail(email: string) {
  try {
    const accessor = sql('./sql/read/email.sql');
    return database.oneOrNone(accessor, { email });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserByPrivateToken(privateToken: string) {
  try {
    const accessor = sql('./sql/read/userByPrivateToken.sql');
    return database.one(accessor, { privateToken });
  } catch {
    throw new errors.ForbiddenError('Unacceptable private token.');
  }
}

export async function readUserWithCompanyBySocialId(socialId: string) {
  try {
    const accessor = sql('./sql/read/userWithCompanyBySocialId.sql');
    return database.oneOrNone(accessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserBySocialId(socialId: string) {
  try {
    const accessor = sql('./sql/read/userBySocialId');
    return database.oneOrNone(accessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUsersWithPredefinedCompanies(last: string) {
  try {
    const accessor = sql('./sql/read/userWithPredefinedCompanies');
    return database.manyOrNone(accessor, { last });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserWithCompanyByShareableId(shareableId: string) {
  try {
    const accessor = sql('./sql/read/userWithCompanyByShareableId');
    return database.oneOrNone(accessor, { shareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readConfirmationBySocialId(socialId: string) {
  try {
    const accessor = sql('./sql/read/confirmationBySocialId.sql');
    return database.oneOrNone(accessor, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserAvailability(askerId: string, targetShareableId: string) {
  try {
    const accessor = sql('./sql/read/userAvailability.sql');
    return database.oneOrNone(accessor, { askerId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readCompany(companyId: string) {
  try {
    const accessor = sql('./sql/read/company.sql');
    return database.oneOrNone(accessor, { companyId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readNameToken(tokenValue: string) {
  try {
    const accessor = sql('./sql/read/nameToken.sql');
    return database.oneOrNone(accessor, { tokenValue });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReceivedReviews(privateToken: string) {
  try {
    const accessor = sql('./sql/read/reviewsReceived.sql');
    return database.manyOrNone(accessor, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readLeftReviewsAmount(authorId: string) {
  try {
    const accessor = sql('./sql/read/reviewsLeftAmount.sql');
    return database.one(accessor, { authorId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readLeftReviews(privateToken: string) {
  try {
    const accessor = sql('./sql/read/reviewsLeft.sql');
    return database.manyOrNone(accessor, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReceivedReviewsAmount(targetShareableId: string) {
  try {
    const accessor = sql('./sql/read/reviewsReceivedAmount.sql');
    return database.one(accessor, { targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReview(privateToken: string, targetShareableId: string) {
  try {
    const accessor = sql('./sql/read/review.sql');
    return database.oneOrNone(accessor, { privateToken, targetShareableId });
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
    return database.manyOrNone(accessor, { tokens });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function updateEmail(privateToken: string, email: string) {
  try {
    const accessor = sql('./sql/update/email.sql');
    return database.none(accessor, { privateToken, email });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function deleteConfirmation(confirmationCode: string) {
  try {
    const accessor = sql('./sql/delete/confirmation.sql');
    return database.one(accessor, { confirmationCode });
  } catch {
    throw new errors.NotFoundError('Impossible to confirm provided code.');
  }
}
