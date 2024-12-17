const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('school_db', 'root', 'your_mysql_password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
