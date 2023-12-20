module.exports = {
    apps: [
      {
        name: 'gshoes',
        script: 'npm',
        args: 'run preview',
        autorestart: true,
        watch: true,
      },
    ],
  };