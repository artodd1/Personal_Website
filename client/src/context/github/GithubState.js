import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  GET_GITHUBUSER,
  GET_GITHUBUSER_REPOS,
  GET_GITHUBUSER_REPO,
  GITHUBUSER_ERROR,
  GITHUBUSER_REPOS_ERROR,
  GITHUBUSER_REPO_ERROR,
} from "../types";

export const GithubState = props => {
  const initialState = {
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get Github user
  const getGithubUser = async username => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      dispatch({ type: GET_GITHUBUSER, payload: res.data });
    } catch (err) {
      dispatch({
        type: GITHUBUSER_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Get Github user repos
  const getGithubUserRepos = async username => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: GET_GITHUBUSER_REPOS, payload: res.data });
    } catch (err) {
      dispatch({
        type: GITHUBUSER_REPOS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Get Github repo languages
  const getGithubUserRepo = async (username, reponame) => {
    try {
      const res = await axios.get(
        `https://api.github.com/repos/${username}/${reponame}`
      );
      dispatch({ type: GET_GITHUBUSER_REPO, payload: res.data });
    } catch (err) {
      dispatch({
        type: GITHUBUSER_REPO_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        repos: state.repos,
        repo: state.repo,
        getGithubUser,
        getGithubUserRepos,
        getGithubUserRepo,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
