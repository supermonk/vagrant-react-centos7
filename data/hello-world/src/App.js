import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Greet></Greet>
      <Greet></Greet>
    </div>
  );
}

export default App;
