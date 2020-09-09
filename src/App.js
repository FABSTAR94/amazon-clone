import React from "react";
import "./App.css";
import Header from "./Header";
function App() {
  return (
    //This is using the BEM convention. for lowercase a on the classname
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
