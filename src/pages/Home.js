import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Bem-vindo ao Meu Portfólio</h1>
    <p>Desenvolvedor de software com foco em front-end e back-end.</p>
    <Link to="/projects">Ver Projetos</Link>
  </div>
);

export default Home;
