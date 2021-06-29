import {
  GET_GITHUBUSER,
  GET_GITHUBUSER_REPOS,
  GET_GITHUBUSER_REPO,
  GITHUBUSER_ERROR,
  GITHUBUSER_REPOS_ERROR,
  GITHUBUSER_REPO_ERROR,
} from "../types";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_GITHUBUSER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_GITHUBUSER_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case GET_GITHUBUSER_REPO:
      return {
        ...state,
        repo: action.payload,
      };
    case GITHUBUSER_ERROR:
    case GITHUBUSER_REPOS_ERROR:
    case GITHUBUSER_REPO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
