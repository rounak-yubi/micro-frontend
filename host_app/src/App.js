// src/App.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Sample = React.lazy(() => import("config_system/Sample"));
const Assesment = React.lazy(() => import("computed_assesment/Assesment"));

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Host App</h1>
      <h3>Remote App -1 Config App</h3>
      <Sample />
      <h3>Remote App -2 Computed Assesment App</h3>

      <Assesment />
      <Footer />
    </div>
  );
}

export default App;
