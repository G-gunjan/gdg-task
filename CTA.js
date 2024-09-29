// src/components/CTA.js

import React from 'react';
import styled from 'styled-components';

const CTAContainer = styled.section`
  background-color: #f7f7f7;
  padding: 60px 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 40px 0;

  @media (max-width: 768px) {
    padding: 40px 10px; /* Adjust padding */
    margin: 20px 0; /* Adjust margin */
  }
`;

const CTAHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

const CTAButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Adjust button padding */
    font-size: 1rem; /* Adjust font size */
  }
`;

const CTA = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <CTAContainer>
      <CTAHeading>Join Us Today!</CTAHeading>
      <p>Experience the best features of our platform. Don’t miss out!</p>
      <CTAButton onClick={handleClick}>Get Started</CTAButton>
    </CTAContainer>
  );
};

export default CTA;


