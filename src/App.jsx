import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </>
  );
};
export default App;
