// Update with your config settings.

module.exports = {

  development: {
    client: 'oracledb',
    connection: {
      database: "orcl.magna.global",
      host:"OBRMS02ORCL",
      user:"INVENTARIO",
      password:"LARANJA"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`  
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
