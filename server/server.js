const express = require('express');
const { Sequelize } = require('sequelize');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
app.use(express.json());

// Conexão com o banco de dados
const sequelize = new Sequelize('portfolio', 'root', '180921P@ulo', {
  host: 'localhost',
  dialect: 'mysql', // Ou 'postgres' se estiver usando PostgreSQL
});

// Teste de conexão
sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados bem-sucedida.');
}).catch(err => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});

// Rotas
app.use('/projects', projectRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
