import React, { useState, Fragment } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/users";
import axios from "axios";
import Search from "./components//users/search";
import Alert from "./components/layout/alert";
import About from "./components/pages/about";
import User from "./components/users/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlertt] = useState(null);
  const [repos, setRepos] = useState([]);

  // state = {
  //   users: [],
  //   user: {},
  //   loading: false,
  //   alert: null,
  //   repos: []
  // };
  // async componentDidMount() {}

  //Searching Users
  const searchUsers = async text => {
    setLoading({ loading: true });
    const {
      data: { items: users }
    } = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUsers(users);
  };

  //Clearing Users

  const clearUsers = () => {
    setUsers([]);
  };

  //Set Alert
  const setAlert = (msg, type) => {
    setAlertt({ message: msg, type });

    setTimeout(() => setAlertt(null), 4000);
  };

  const searchUser = async username => {
    setLoading(true);
    const { data: user } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setUser(user);
  };

  const getRepos = async username => {
    setLoading(true);
    const { data: repos } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setLoading(false);
    setRepos(repos);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  searchUser={searchUser}
                  getRepos={getRepos}
                  repos={repos}
                  user={user}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
