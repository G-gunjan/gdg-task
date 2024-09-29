// src/App.js

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GlobalStyles from './GlobalStyles';
import { lightTheme, darkTheme } from './utils/theme';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    console.log("Theme toggle clicked"); // Debug log
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header toggleTheme={toggleTheme} /> {/* Pass toggleTheme as a prop */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cta" element={<CTA />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

