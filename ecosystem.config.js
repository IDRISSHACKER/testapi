module.exports = {
  apps : [{
    script: '/',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user: 'aysfishh117',
      host: '78.46.11.32',
      ref  : 'master',
      repo: 'https://github.com/IDRISSHACKER/testapi.git',
      path: '/home/aysfishh117/pm2',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
