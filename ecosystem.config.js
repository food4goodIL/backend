module.exports = {
  apps: [{
    name: 'food4good_backend',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-52-59-185-144.eu-central-1.compute.amazonaws.com',
      key: 'c:/My/food4good/keys/dinaKey.pem',
      ref: 'origin/master',
      repo: 'https://github.com/food4goodIL/backend',
      path: '/home/ec2-user/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
