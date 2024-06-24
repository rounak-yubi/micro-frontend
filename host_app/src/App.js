// src/App.js
import React from "react";
const Sample = React.lazy(() => import("config_system/Sample"));
const Assesment = React.lazy(() => import("computed_assesment/Assesment"));

function App() {
  return (
    <div className="App">
      <h1>Host App</h1>
      <h3>Remote App -1 Config App</h3>
      <Sample />
      <h3>Remote App -2 Computed Assesment App</h3>

      <Assesment />
    </div>
  );
}

export default App;
