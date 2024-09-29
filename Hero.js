// src/components/Hero.js

import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-image: linear-gradient(to bottom, #333, #555);
  height: 100vh;
  display: flex;
  flex-direction: column; /* Change to column for smaller devices */
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    height: auto; /* Allow auto height on smaller screens */
    padding: 20px; /* Add some padding */
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Welcome to GDG Task</h1>
      <p>A responsive website built with React</p>
      <button>Learn More</button>
    </HeroContainer>
  );
};

export default Hero;




