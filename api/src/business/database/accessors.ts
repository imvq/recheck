import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

function sql(file: string) {
  const fullPath = joinPath(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

// Create.

export const sqlCreateCompany = sql('./sql/create/company.sql');
export const sqlCreateNameToken = sql('./sql/create/nameToken.sql');
export const sqlCreateNameTokenBinding = sql('./sql/create/nameTokenBinding.sql');
export const sqlCreateUser = sql('./sql/create/user.sql');

// Read.

export const sqlReadEmail = sql('./sql/read/email.sql');
export const sqlReadCompany = sql('./sql/read/company.sql');
export const sqlReadNameToken = sql('./sql/read/nameToken.sql');
export const sqlReadConfirmation = sql('./sql/read/confirmation.sql');
export const sqlReadConfirmationBySocialId = sql('./sql/read/confirmationBySocialId.sql');
export const sqlReadUserAvailability = sql('./sql/read/userAvailability.sql');
export const sqlReadUserByPrivateToken = sql('./sql/read/userByPrivateToken.sql');
export const sqlReadUserByShareableId = sql('./sql/read/userByShareableId.sql');
export const sqlReadUserBySocialId = sql('./sql/read/userBySocialId');
export const sqlReadUserWithCompanyBySocialId = sql('./sql/read/userWithCompanyBySocialId');

// Update.

export const sqlUpdateUsersEmail = sql('./sql/update/usersEmail.sql');

// Delete.

export const sqlDeleteConfirmation = sql('./sql/delete/confiration.sql');
