const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.production'));

const environmentConfig = `// PM2 config.
module.exports = {
  apps: [{
    name: 'recheck_backend',
    script: './index.js',
    env_production: {
      ${Object.keys(envConfig).map(key => `${key}: '${envConfig[key]}'`).join(',\n      ')}
    }
  }]
};
`;

fs.writeFileSync('dist/ecosystem.config.js', environmentConfig);
