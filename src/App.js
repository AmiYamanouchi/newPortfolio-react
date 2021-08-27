import React from 'react';
import './App.css';
import './reset.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Contact />
        <Footer />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
