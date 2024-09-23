import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/projects/${id}`)
      .then(response => setProject(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!project) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={project.imageUrl} alt={project.name} />
    </div>
  );
};

export default ProjectDetails;
