// src/components/Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <h1>GDG Task</h1>
      <button onClick={toggleTheme}>Toggle Theme</button> {/* Add the toggle button */}
    </HeaderContainer>
  );
};

export default Header;




