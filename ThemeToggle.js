// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
`;

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      Toggle Theme
    </ToggleButton>
  );
};

export default ThemeToggle;


