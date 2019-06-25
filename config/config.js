module.exports = {
  development: {
    username: 'root',
    password: process.env.DEVELOPMENT_PASSWORD,
    database: 'devpool2_db',
    host: 'localhost',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: process.env.TESTING_PASSWORD,
    database: 'devpool2_db',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql'
  }
};
