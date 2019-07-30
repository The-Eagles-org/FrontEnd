import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Register from "./components/Register";
import { Home } from "./components/Home";

class App extends Component {
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <h2 className="title">
            wedding| <span className="planner">planner</span>
          </h2>
          <div className="navigation">
            <Link className="nav-tags nav-tags1" to="/">
              Home
            </Link>
            <Link className="nav-tags nav-tags2" to="/register">
              Register
            </Link>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
