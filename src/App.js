import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Buttoncomp from './components/Button/Buttoncomp'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, flairTheme } from './components/Theme';
import { GlobalStyles } from './components/Global';

function App() {
  console.log('darktheme: ', darkTheme)
  console.log('flairTheme: ', flairTheme)
  return (
    <>
    <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Header />
        <Buttoncomp>Toggle Theme</Buttoncomp>
            <h1>It's a light theme!</h1>
        <Main />
        <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
