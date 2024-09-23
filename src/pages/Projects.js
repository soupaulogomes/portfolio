import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Projetos</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
