// Projects.jsx

import React from 'react';
import styled from 'styled-components';

// --- Color Definitions ---
const DARK_RED_BASE = '#1A0E0E';
const LIGHTER_RED_STRIPE = '#2C1A1A';
const BRIGHT_CYAN_ACCENT = '#00bcd4';
const WHITE = '#ffffff';

// --- Images ---
import ImagePlaceholder1 from '../assets/images/shopbot.png';

// --- Styled Components ---

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: ${DARK_RED_BASE}; 
  background-image: repeating-linear-gradient(
    to right, 
    ${DARK_RED_BASE}, 
    ${DARK_RED_BASE} 10px, 
    ${LIGHTER_RED_STRIPE} 10px, 
    ${LIGHTER_RED_STRIPE} 11px
  );
  background-size: 100% 100%;
  color: ${WHITE}; 
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 60px;
  color: ${BRIGHT_CYAN_ACCENT};
  font-weight: bold;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${BRIGHT_CYAN_ACCENT};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 40px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  display: block;
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background-color: #3a1a1a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  height: 250px;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: brightness(0.8);

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 188, 212, 0.85),
    rgba(0, 151, 167, 0.85)
  );
  color: ${WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const OverlayDescription = styled.p`
  font-size: 0.9em;
  margin-bottom: 20px;
`;

const OverlayIcon = styled.div`
  font-size: 2em;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
`;


// --- Project Component ---

const ProjectItem = ({ image, title, description, link }) => (
  <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
    <ProjectCard>
      <ProjectImage src={image} alt={title} />
      <ProjectOverlay>
        <OverlayTitle>{title}</OverlayTitle>
        <OverlayDescription>{description}</OverlayDescription>
        <OverlayIcon>🔗</OverlayIcon>
      </ProjectOverlay>
    </ProjectCard>
  </ProjectLink>
);


// --- Main Component ---

const Projects = () => {
  const projectsData = [
    { 
      image: ImagePlaceholder1, 
      title: 'ShopBot App',
      description: 'AI powered E-Commerce App.',
      link: 'https://shopbot-tan.vercel.app/'
    }
  ];

  return (
    <ProjectsSection>
      <SectionTitle>Our Projects</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
