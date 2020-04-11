import React from "react";
import RepoItem from "./reposItem";

const Repos = ({ repos }) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
