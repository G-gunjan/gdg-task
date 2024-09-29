// src/components/Features.js

import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack features vertically on smaller screens */
    padding: 20px;
  }
`;

const Feature = styled.div`
  flex-basis: 30%;
  margin: 20px;
  text-align: center;

  @media (max-width: 768px) {
    flex-basis: 100%; /* Take full width on smaller screens */
    margin: 10px 0; /* Adjust margin */
  }
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <Feature>
        <h3>Responsive Design</h3>
        <p>Looks great on any device</p>
      </Feature>
      <Feature>
        <h3>Dark Mode</h3>
        <p>Easy on the eyes</p>
      </Feature>
      <Feature>
        <h3>Fast Performance</h3>
        <p>Optimized for speed</p>
      </Feature>
    </FeaturesContainer>
  );
};

export default Features;


