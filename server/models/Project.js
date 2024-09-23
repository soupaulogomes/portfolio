const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Importação da configuração do banco

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Project;
