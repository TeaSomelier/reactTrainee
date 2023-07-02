import React, { useState } from "react";

// import { TestComp } from './components/TestComp/TestComp';
import TestComp from "./components/TestComp/TestComp";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count++)}>+</button>
      <TestComp  color='black'/>
    </div>
  );
}

export default App;
