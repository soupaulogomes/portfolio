const { Sequelize } = require('sequelize');

// Configurando a conexão com o banco de dados
const sequelize = new Sequelize('portfolio', 'root', '180921P@ulo', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
