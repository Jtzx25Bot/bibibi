import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getResult } from './DayTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  {getResult()}
      </header>
    </div>
  );
}

export default App;
