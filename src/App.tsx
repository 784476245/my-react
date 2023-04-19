import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <button>AAA</button>
      </div>
      <div>
        <button>BBB</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
