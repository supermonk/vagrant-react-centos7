import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
// import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Narendra" heroName="Batman">
        <p> This is children props</p>
      </Greet>
      <Greet name="Superman" heroName="Superman">
        <button> Action</button>
      </Greet>
      <Greet name="Bow" heroName="Wonderwoman"></Greet>
      <Welcome name="Narendra" heroName="Batman"></Welcome>
      <Welcome name="Superman" heroName="Superman"></Welcome> */}
      {/* <Message></Message> 
      <Counter></Counter> */}
      <Welcome name="Narendra" heroName="Batman"></Welcome>
    </div>
  );
}

export default App;
