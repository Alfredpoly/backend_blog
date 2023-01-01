module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.PORT,
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: 'https://strapi-server.herokuapp.com/'
});
