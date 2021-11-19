const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const options = {
  dialect: 'postgres',
  logging: config.isProd ? false : true,
};
if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

/* const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//Para cambiar a una mysql simplemente hay que cambiar postgres por sql y en env poner el port de mysql
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
 */
const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

//sequelize.sync(); //crea estructura con los modelos

module.exports = sequelize;
