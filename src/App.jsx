// src/App.js
import React from 'react';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Nav from './components/Nav'
import './styles.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
