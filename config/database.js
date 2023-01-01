// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env("DATABASE_HOST", "strapi.c9jwteiydysx.eu-west-3.rds.amazonaws.com"),
      port: process.env.int("DATABASE_PORT", 5432),
      database: process.env("DATABASE_NAME", "postgres"),
      user: process.env("DATABASE_USERNAME", "postgres"),
      password: process.env("DATABASE_PASSWORD", ""),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
});
