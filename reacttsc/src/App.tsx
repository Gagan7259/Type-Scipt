import React from "react";
import "./App.css";
import InputFeild from "./Components/InputFeild";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputFeild />
    </div>
  );
};

export default App;
