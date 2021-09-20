import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

function sql(file: string) {
  const fullPath = joinPath(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

export const sqlFindEmail = sql('./sql/findEmail.sql');
export const sqlFindCompany = sql('./sql/findCompany.sql');
export const sqlFindNameToken = sql('./sql/findNameToken.sql');
export const sqlFindUserConfirmation = sql('./sql/findUserConfirmation.sql');
export const sqlFindUserBySocialId = sql('./sql/findUserBySocialId');

export const sqlCreateCompany = sql('./sql/createCompany.sql');
export const sqlCreateNameToken = sql('./sql/createNameToken.sql');
export const sqlCreateNameTokenBinding = sql('./sql/createNameTokenBinding.sql');
export const sqlCreateUser = sql('./sql/createUser.sql');
