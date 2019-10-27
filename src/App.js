import React from 'react';
import logo from './logo.svg';
import './App.css';

//import components
import {Button} from './components/Button/index';
import {Calendar} from './components/Calendar/index';
import {Form} from './components/Form/index';
import {Sidebar} from './components/Sidebar/index';

function App() {
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
      <Button></Button>
        <Calendar></Calendar>
        <Form></Form>
        <Sidebar></Sidebar>
    </div>
  );
}

export default App;
