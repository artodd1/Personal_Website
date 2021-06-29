import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className='card mb-3 mx-3 col'>
      <button className='btn btn-success mw-50px' href={repo.html_url}>
        {repo.name}
      </button>
      <ul>
        <li className='badge bg-dark px-2'>{repo.language}</li>
      </ul>
    </div>
  );
};

RepoItem.protoTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
