import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //This is using the BEM convention. for lowercase a on the classname
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
