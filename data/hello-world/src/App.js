import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Narendra" heroName="Batman">
        <p> This is children props</p>
      </Greet>
      <Greet name="Superman" heroName="Superman">
        <button> Action</button>
      </Greet>
      <Greet name="Bow" heroName="Wonderwoman"></Greet>
    </div>
  );
}

export default App;
