const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Rota para listar todos os projetos
router.get('/', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

// Rota para pegar detalhes de um projeto
router.get('/:id', async (req, res) => {
  const project = await Project.findByPk(req.params.id);
  res.json(project);
});

module.exports = router;
