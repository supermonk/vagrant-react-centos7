import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Narendra" heroName="Batman"></Greet>
      <Greet name= "Superman" heroName="Superman"></Greet>
      <Greet name="Bow" heroName="Wonderwoman"></Greet>
    </div>
  );
}

export default App;
