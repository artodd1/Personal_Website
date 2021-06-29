import React, { useEffect, useContext } from "react";
import GithubContext from "../../../context/github/githubContext";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = () => {
  const githubContext = useContext(GithubContext);
  const username = "artodd1";
  const { repos, getGithubUserRepos } = githubContext;

  useEffect(() => {
    getGithubUserRepos(username);
    //eslint-disable-next-line
  }, []);
  return (
    <section className='card p-3'>
      <h2>Github Repos</h2>
      <div className='row'>
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </section>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
