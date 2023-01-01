module.exports = {
  apps: [
    {
      name: 'strapi_blog', // Your project name
      cwd: '../backend_blog', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'run develop', // Script to start the Strapi server, `start` by default
      env: {
        NODE_ENV: 'development',
        DATABASE_HOST: 'strapi.c9jwteiydysx.eu-west-3.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'postgres', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'postgres', // default username
        DATABASE_PASSWORD: 'Testtest2',
        AWS_ACCESS_KEY_ID: 'AKIASEHKZ24U3UMGFHLO',
        AWS_ACCESS_SECRET: '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', // Find it in Amazon S3 Dashboard
        AWS_REGION: 'eu-west-3',
        AWS_BUCKET_NAME: 'blog-images-strapi',
      },
    },
  ],
};

