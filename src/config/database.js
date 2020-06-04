module.exports = {
  development: {
    dialect: 'postgres',
    username: 'postgres',
    host: '127.0.0.1',
    database: 'bootcamp',
    password: 'docker',
    port: '5432',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
