import React from "react";
import BellCurveContainer from "./components/BellCurveContainer";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="content-container">
        <h2>
          Topcoder <span className="solutions-text">Solutions</span>
        </h2>
        <p>Simply click on any of the categories below to explore.</p>
      </div>
      <BellCurveContainer />
    </div>
  );
};

export default App;
