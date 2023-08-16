module.exports = {
  apps: [
    {
      name: 'fomentamos_back',
      script: './server.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
