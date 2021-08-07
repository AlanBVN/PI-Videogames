import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
      </React.Fragment>
    </div>
  );
}

export default App;
