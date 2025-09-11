import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../CSS/Dioses.css';

const dioses = [
  {
    id: 1,
    name: 'Leandro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Franco',
    description: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Dios 3',
    description: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Dios 4',
    description: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

function Dioses() {
  return (
    <div className="dioses-page container">
      <h1 className="page-title">Nuestro Equipo</h1>
      <p className="page-subtitle">Conoce a las mentes maestras detrás del proyecto.</p>
      <div className="dioses-container">
        {dioses.map((dios) => (
          <div key={dios.id} className="dios-card card">
            <img src={dios.image} alt={`Foto de ${dios.name}`} className="dios-image" />
            <h3 className="dios-name">{dios.name}</h3>
            <p className="dios-description">{dios.description}</p>
            <div className="dios-socials">
              <a href={dios.github} target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href={dios.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dioses;
