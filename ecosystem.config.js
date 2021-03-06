const env = process.env.NODE_ENV || 'development';

module.exports = {
  apps: [{
    name: 'board',
    script: env === 'development' ? './src/server.ts' : './dist/server.js',
    exec_mode: 'cluster',
    instances: env === 'development' ? '1' : 'max',
    kill_timeout: 3000,
    env_production: {
      NODE_ENV: 'production',
    },
    env_development: {
      NODE_ENV: 'development',
    },
  }],
};
