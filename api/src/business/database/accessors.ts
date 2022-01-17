import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

import * as errors from '@business/errors';

import { database } from '@business/preloaded';

class QueryFileCacher {
  private static readonly queryFiles: { [key: string]: QueryFile; } = {};

  private static createQueryFile(file: string) {
    const fullPath = joinPath(__dirname, file);
    return new QueryFile(fullPath, { minify: true });
  }

  public static getQuery(path: string) {
    if (!QueryFileCacher.queryFiles[path]) {
      QueryFileCacher.queryFiles[path] = QueryFileCacher.createQueryFile(path);
    }

    return QueryFileCacher.queryFiles[path];
  }
}

export async function createCompany(name: string | null) {
  if (name === null) {
    throw new errors.BadRequestError('No company name defined.');
  }

  try {
    const query = QueryFileCacher.getQuery('./sql/create/company.sql');
    return await database.one(query, { name });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createConfirmation(userId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/create/confirmation.sql');
    return await database.one(query, { userId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createUser(parameters: any) {
  try {
    const query = QueryFileCacher.getQuery('./sql/create/user.sql');
    return await database.one(query, { ...parameters });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createNameToken(tokenValue: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/create/nameToken.sql');
    return await database.one(query, { tokenValue });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createNameTokenBinding(userId: string, tokenId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/create/nameTokenBinding.sql');
    return await database.one(query, { userId, tokenId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createReview(authorId: string, targetShareableId: string, content: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/create/review.sql');
    return await database.one(query, { authorId, targetShareableId, content });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function createUserAvailability(ownerId: string, targetShareableId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/create/userAvailability.sql');
    return await database.one(query, { ownerId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readColleagues(privateToken: string, companyId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/colleagues.sql');
    return await database.manyOrNone(query, { privateToken, companyId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readCompaniesMatched(sequence: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/companiesMatched.sql');
    return await database.manyOrNone(query, { sequence });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readEmail(email: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/email.sql');
    return await database.oneOrNone(query, { email });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserByPrivateToken(privateToken: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/userByPrivateToken.sql');
    return await database.one(query, { privateToken });
  } catch {
    throw new errors.ForbiddenError('Unacceptable private token.');
  }
}

export async function readUserWithCompanyByPrivateToken(privateToken: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/userWithCompanyByPrivateToken.sql');
    return await database.oneOrNone(query, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserWithCompanyBySocialId(socialId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/userWithCompanyBySocialId.sql');
    return await database.oneOrNone(query, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserBySocialId(socialId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/userBySocialId.sql');
    return await database.oneOrNone(query, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUsersAvailable(ownerId: string, last: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/usersAvailable.sql');
    return await database.manyOrNone(query, { ownerId, last });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUsersWithPredefinedCompanies(last: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/usersWithPredefinedCompanies.sql');
    return await database.manyOrNone(query, { last });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserWithCompanyByShareableId(shareableId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/userWithCompanyByShareableId.sql');
    return await database.oneOrNone(query, { shareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readConfirmationBySocialId(socialId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/confirmationBySocialId.sql');
    return await database.oneOrNone(query, { socialId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserAvailability(askerId: string, targetShareableId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/userAvailability.sql');
    return await database.oneOrNone(query, { askerId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readCompany(companyId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/company.sql');
    return await database.oneOrNone(query, { companyId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readNameToken(tokenValue: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/nameToken.sql');
    return await database.oneOrNone(query, { tokenValue });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReceivedReviews(privateToken: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/reviewsReceived.sql');
    return await database.manyOrNone(query, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readLeftReviewsAmount(authorId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/reviewsLeftAmount.sql');
    return await database.one(query, { authorId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readLeftReviews(privateToken: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/reviewsLeft.sql');
    return await database.manyOrNone(query, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReceivedReviewsAmount(targetShareableId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/reviewsReceivedAmount.sql');
    return await database.one(query, { targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readReview(authorId: string, targetShareableId: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/read/review.sql');
    return await database.oneOrNone(query, { authorId, targetShareableId });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function readUserWithCompanyByTokens(
  tokens: string[],
  options?: { limited: boolean; }
) {
  try {
    const query = options?.limited
      ? QueryFileCacher.getQuery('./sql/read/userWithCompanyByTokensLimited.sql')
      : QueryFileCacher.getQuery('./sql/read/userWithCompanyByTokens.sql');
    return await database.manyOrNone(query, { tokens });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function decreaseReviewsAvailable(privateToken: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/update/decreaseReviewsAvailable.sql');
    return await database.none(query, { privateToken });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function updateEmail(privateToken: string, email: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/update/email.sql');
    return await database.none(query, { privateToken, email });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function updateLastRole(socialId: string, role: 'recruiter' | 'candidate') {
  try {
    const query = QueryFileCacher.getQuery('./sql/update/lastRole.sql');
    return await database.none(query, { socialId, role });
  } catch {
    throw new errors.InternalServerError('Database conflict.');
  }
}

export async function deleteConfirmation(confirmationCode: string) {
  try {
    const query = QueryFileCacher.getQuery('./sql/delete/confirmation.sql');
    return await database.one(query, { confirmationCode });
  } catch {
    throw new errors.NotFoundError('Impossible to confirm provided code.');
  }
}
