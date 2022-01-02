import React, { useEffect, useState } from "react";
import "./App.css";
import WithCustomHook from "./components/WithCustomHook";
import WithoutCustomHook from "./components/WithoutCustomHooks";

function App() {

  return (
    <div className="App">
      <header className="App-header">
       {/* <WithoutCustomHook/> */}
       <WithCustomHook/>
      </header>
    </div>
  );
}

export default App;
