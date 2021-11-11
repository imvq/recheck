import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

function sql(file: string) {
  const fullPath = joinPath(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

// Create.

export const sqlCreateCompany = sql('./sql/create/createCompany.sql');
export const sqlCreateNameToken = sql('./sql/create/createNameToken.sql');
export const sqlCreateNameTokenBinding = sql('./sql/create/createNameTokenBinding.sql');
export const sqlCreateUser = sql('./sql/create/user.sql');

// Read.

export const sqlFindEmail = sql('./sql/read/findEmail.sql');
export const sqlFindCompany = sql('./sql/read/findCompany.sql');
export const sqlFindNameToken = sql('./sql/read/findNameToken.sql');
export const sqlFindConfirmation = sql('./sql/read/confirmation.sql');
export const sqlFindConfirmationBySocialId = sql('./sql/read/confirmationBySocialId.sql');
export const sqlReadUserByPrivateToken = sql('./sql/read/user.sql');
export const sqlFindUserBySocialId = sql('./sql/read/findUserBySocialId');
export const sqlFindUserWithCompanyBySocialId = sql('./sql/read/userWithCompanyBySocialId');

// Update.

export const sqlUpdateUsersEmail = sql('./sql/update/usersEmail.sql');

// Delete.

export const sqlDeleteConfirmation = sql('./sql/delete/confiration.sql');
