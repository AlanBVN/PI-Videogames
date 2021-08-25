import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav/Nav";
import { useLocation } from "react-router-dom";
import Details from "./components/Details/Details";
import Form from "./components/Form/Form";



function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Nav />}
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/addgame" component={Form} />
        <Route exact path="/videogame/:id" component={Details} />
      </React.Fragment>
    </div>
  );
}

export default App;
