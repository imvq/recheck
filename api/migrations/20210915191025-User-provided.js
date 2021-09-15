const fs = require('fs');
const path = require('path');

let PromiseMiddleware = null;

function executeMigration(databaseInjection, migrationPath) {
  const filePath = path.join(__dirname, 'sqls', migrationPath);

  return new PromiseMiddleware((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (error, data) => {
      if (error) return reject(error);
      console.log(`received data: ${data}`);

      return resolve(data);
    });
  }).then(data => databaseInjection.runSql(data));
}

exports.setup = options => {
  PromiseMiddleware = options.Promise;
};

exports.up = database => (
  executeMigration(database, '20210915191025-User-provided-up.sql')
);

exports.down = database => (
  executeMigration(database, '20210915191025-User-provided-down.sql')
);

// Migration version.
// eslint-disable-next-line
exports._meta = { version: 1 };
