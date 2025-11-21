// Services.jsx

import React, { useState, useEffect } from 'react'; // <-- IMPORTED HOOKS
import styled, { keyframes, css } from 'styled-components'; // <-- IMPORTED keyframes & css

// --- 1. Define the Color Animation Keyframes ---

// Define the color cycling sequence (Blue -> Red -> White -> loop)
// We will transition between these colors over 6 seconds for the full loop.
const colorCycle = keyframes`
  0%   { border-color: #00bcd4; background-color: #2a2a3e; } /* Initial/Blue-ish */
  33%  { border-color: #ff4136; background-color: #3e2a2a; } /* Red-ish */
  66%  { border-color: #ffffff; background-color: #3e3e3e; } /* White-ish */
  100% { border-color: #00bcd4; background-color: #2a2a3e; }
`;


// --- 2. Styled Components (Updated) ---

const ServicesSection = styled.section`
  padding: 80px 20px;
 
  background-color: #1a1a2e;
  color: #e0e0e0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 60px;
  color: #00bcd4;
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
    background-color: #00bcd4;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 40px;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// **UPDATED ServiceCard:** Now accepts an 'animationDelay' prop
const ServiceCard = styled.div`
  /* Base Styles */
  border-radius: 15px;
  padding: 40px 30px;
  width: 320px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  /* Apply the animation dynamically */
  ${({ animationDelay }) => css`
    animation: ${colorCycle} 6s infinite alternate; /* 6s for Blue->Red->White->Blue sequence */
    animation-delay: ${animationDelay}; /* Stagger the start time */
  `}
  
  /* Use !important to override the animation's background-color on hover for a cleaner effect */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
    border-color: #f7931e !important; /* Gold on hover */
    background-color: #442817 !important; /* Darker brown on hover */
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 350px;
    padding: 30px 20px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3em;
  color: #00bcd4;
  margin-bottom: 20px;
  background-color: rgba(0, 188, 212, 0.1);
  padding: 15px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  /* Add subtle icon pulse effect */
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #e0e0e0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CardDescription = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #b0b0b0;
  margin-bottom: 15px; 
`;

// --- 3. Service Component (Uses animation) ---

// The index prop is passed from the parent to calculate the delay
const Service = ({ icon, title, description, index }) => {
    // Calculate the animation delay to start each card sequentially (e.g., 0s, 0.5s, 1s)
    const delay = `${index * 0.5}s`;

    return (
        // Pass the delay to the styled component
        <ServiceCard animationDelay={delay}>
            <IconWrapper>{icon}</IconWrapper>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </ServiceCard>
    );
};

// --- 4. Main Services Component (Updated Data) ---

const Services = () => {
  const servicesData = [
    {
      icon: '💻',
      title: 'Full-Stack MERN Development',
      description:
        'End-to-end development using the MERN stack (MongoDB, Express, React, Node.js). Building robust, scalable, and modern single-page applications (SPAs).',
    },
    {
      icon: '🛠️',
      title: 'RESTful API Development',
      description:
        'Designing and implementing secure, high-performance REST APIs with Node.js and Express.js, backed by MongoDB for efficient data handling and complex queries.',
    },
    {
      icon: '⚛️',
      title: 'Frontend Expertise & UI/UX',
      description:
        'Creating highly responsive and interactive user interfaces using modern React.js, HTML, and CSS. Focus on state management and excellent user experience (UX) principles.',
    },
  ];

  return (
    <ServicesSection>
      <SectionTitle>My Core Development Services</SectionTitle>
      <ServicesContainer>
        {/* Pass the index to the Service component for sequential animation */}
        {servicesData.map((service, index) => (
          <Service
            key={index}
            index={index} // Pass index here
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;