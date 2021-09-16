import { join as joinPath } from 'path';
import { QueryFile } from 'pg-promise';

function sql(file: string) {
  const fullPath = joinPath(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

export const sqlFindEmail = sql('./sql/findEmail.sql');
export const sqlFindUserBySocialId = sql('./sql/findUserBySocialId');
