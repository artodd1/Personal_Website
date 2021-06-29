import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";

import GithubState from "./context/github/GithubState";

import "./App.css";

function App() {
  return (
    <GithubState>
      <Router>
        <Fragment>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/Personal_Website/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/portfolio' component={Portfolio} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GithubState>
  );
}

export default App;
