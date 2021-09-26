import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

function sql(file: string) {
  const fullPath = joinPath(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

export const sqlFindEmail = sql('./sql/read/findEmail.sql');
export const sqlFindCompany = sql('./sql/read/findCompany.sql');
export const sqlFindNameToken = sql('./sql/read/findNameToken.sql');
export const sqlFindUserConfirmation = sql('./sql/read/findUserConfirmation.sql');
export const sqlUserWithConfirmation = sql('./sql/read/userWithConfirmation.sql');
export const sqlFindUserBySocialId = sql('./sql/read/findUserBySocialId');

export const sqlCreateCompany = sql('./sql/create/createCompany.sql');
export const sqlCreateNameToken = sql('./sql/create/createNameToken.sql');
export const sqlCreateNameTokenBinding = sql('./sql/create/createNameTokenBinding.sql');
export const sqlCreateUser = sql('./sql/create/user.sql');
