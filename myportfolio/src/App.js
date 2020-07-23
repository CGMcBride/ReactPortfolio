import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
