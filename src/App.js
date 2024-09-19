// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProjectList from './components/ProjectList';
import ThreeDScene from './components/ThreeDScene';
// import Skills from './components/Skills';


function App() {
  return (
    <div>
      <h1>Cybersecurity Portfolio</h1>
      <div> <ThreeDScene /> </div>
      <div>
        <button> 1 </button>
        <button> 2 </button>
      </div>

      

      

      <div>
      <ProjectList />
      </div>
      

    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
