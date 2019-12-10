import React from "react";
import "./App.css";
import { getResult } from "./DayFour";

function App() {
  return (
    <div className="App">
      <header className="App-header">{getResult()}</header>
    </div>
  );
}

export default App;
