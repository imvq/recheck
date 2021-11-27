import { Request, Response } from 'express';

import * as accessors from '@business/database/accessors';
import * as mappers from '@business/database/mappers';

import { assertParamsData, assertBodyData, reply } from '@business/commons';
import { ICompaniesDictionary } from '@typing';

/**
 * When targeting users by their shareable IDs we must be able to find their public data.
 */
export async function searchUserByShareableId(request: Request, response: Response) {
  interface IBodyParams {
    shareableId: string;
  }

  const { shareableId }: IBodyParams = request.params as { shareableId: string; };
  assertBodyData(shareableId);

  const targetEntity = await accessors.readUserWithCompanyByShareableId(shareableId);
  const target = mappers.normalizePublicUserInfo(targetEntity);

  reply(response, target);
}

/**
 * Search by parts of users' names.
 */
export async function searchUsersByTokens(request: Request, response: Response) {
  interface IBodyParams {
    tokens: string[];
  }

  const { tokens }: IBodyParams = request.body;
  assertBodyData(tokens);

  const results = await accessors.readUserWithCompanyByTokens(tokens) || [];

  reply(response, results);
}

/**
 * Quick search by parts of users' names.
 * Similar to simple search but limits the results.
 */
export async function quickSearchUsersByTokens(request: Request, response: Response) {
  interface IPathParams {
    tokens: string[];
  }

  const { tokens }: IPathParams = request.body;
  assertBodyData(tokens);

  const results = await accessors.readUserWithCompanyByTokens(tokens, { limited: true }) || [];

  reply(response, results);
}

/**
 * Find matched companies (by the beginning of their names).
 */
export async function quickSearchCompanies(request: Request, response: Response) {
  interface IBodyParams {
    sequence: string;
  }

  const { sequence }: IBodyParams = request.body;
  assertBodyData(sequence);

  const results = await accessors.readCompaniesMatched(`${sequence.toLocaleLowerCase()}%`);

  reply(response, results.map(company => mappers.normalizeCompany(company)));
}

/**
 * Load predefined companies (for recommendations section) with their members.
 */
export async function getPredefinedCompanies(request: Request, response: Response) {
  interface IPathParams {
    last: string;
  }

  interface IBodyParams {
    privateToken: string;
  }

  const { last }: IPathParams = request.params as { last: string; };
  const { privateToken }: IBodyParams = request.body;
  assertParamsData(last);
  assertBodyData(last, privateToken);

  const askerEntity = await accessors.readUserByPrivateToken(privateToken);
  const asker = mappers.normalizePublicUserInfo(askerEntity);

  const usersWithCompanies = await accessors.readUsersWithPredefinedCompanies(last);

  const companiesDictionary: ICompaniesDictionary = {};

  usersWithCompanies.forEach(user => {
    const normalizedUser = mappers.normalizeSearchedUserInfo(user);

    // By design, the asker must not get themselves.
    if (normalizedUser.shareableId === asker.shareableId) {
      return;
    }

    getMembersArray(companiesDictionary, normalizedUser)
      .members
      .push(normalizedUser);
  });

  reply(response, Object.values(companiesDictionary));
}

function getMembersArray(
  companiesDictionary: ICompaniesDictionary,
  user: ReturnType<typeof mappers.normalizeSearchedUserInfo>
) {
  if (!companiesDictionary[user.currentCompanyId]) {
    companiesDictionary[user.currentCompanyId] = {
      id: user.currentCompanyId,
      name: user.currentCompanyName,
      logoUrl: user.currentCompanyLogoUrl,
      members: []
    };
  }

  return companiesDictionary[user.currentCompanyId];
}
