import React from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/pages/home";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import User from "./components/users/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import NotFound from "./components/pages/notFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />

            <div className="container">
              <Alert />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => <User {...props} />}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
