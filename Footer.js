// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px; /* Adjust padding */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 GDG Task</p>
    </FooterContainer>
  );
};

export default Footer;

