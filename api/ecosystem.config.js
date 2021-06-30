module.exports = {
  apps: [{
    name: 'recheck_backend',
    script: './index.js',
    env_production: {
      NODE_ENV: 'production'
    },
    env_development: {
      NODE_ENV: 'development'
    }
  }]
};
