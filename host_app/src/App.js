// src/App.js
import React from "react";
const Sample = React.lazy(() => import("config_system/Sample"));

function App() {
  return (
    <div className="App">
      <h1>Host App</h1>
      <Sample />
    </div>
  );
}

export default App;
