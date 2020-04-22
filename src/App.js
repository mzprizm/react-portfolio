import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './components/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import About from './components/About';
import Buttoncomp from './components/Button/Buttoncomp'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, flairTheme } from './components/Theme';
import { GlobalStyles } from './components/Global';

function App() {
  const [theme, setTheme] = useState('');
  const toggleTheme = () => {
    console.log('theme toggling!')
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('flair');
    } else {
      setTheme('light');
    }
  }
  // console.log('lightTheme: ', lightTheme)
  // console.log('darkTheme: ', darkTheme)
  // console.log('flairTheme: ', flairTheme)
  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Buttoncomp onClick={toggleTheme}>Toggle Theme</Buttoncomp>
            <h1>It's a light theme!</h1>
        <Main />
        <Footer />
    </ThemeProvider>
    <BrowserRouter>
    <Switch>
	      <Route exact path="/" render = {() => < Main/>}/>
	      <Route exact path="/about" component={About}/> 
       <Redirect to="/"/>
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
