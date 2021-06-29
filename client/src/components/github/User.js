import React, { Fragment, useContext, useEffect } from "react";
import GithubContext from "../../context/github/githubContext";
import { Link } from "react-router-dom";
import Repos from "./repos/Repos";
import { CheckCircleFill } from "react-bootstrap-icons";

const User = () => {
  const githubContext = useContext(GithubContext);
  const username = "artodd1";
  const { user, getGithubUser } = githubContext;

  useEffect(() => {
    getGithubUser(username);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gist,
    hireable,
  } = user;

  return (
    <Fragment>
      <section class='p-5 bg-dark'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6'>
              <div className='card bg-light'>
                <div className='text-center'>
                  <img
                    src={avatar_url}
                    className='rounded-circle m-3'
                    alt='Adrian Todd'
                    style={{ width: "150px" }}
                  ></img>
                  <h1>{name}</h1>
                  <p>{location}</p>
                  <div color='success'>
                    Hireable:{" "}
                    {{ hireable } ? (
                      <CheckCircleFill color='success' />
                    ) : (
                      <CheckCircleFill color='danger' />
                    )}
                  </div>
                  <a href={html_url} className='btn btn-success my-3'>
                    Visit Github Profile
                  </a>
                </div>
                <div>
                  {bio && (
                    <Fragment>
                      <h5 className='m-3'>{bio}</h5>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default User;

{
  // <Link to='/' className='btn btn-light'>
  //       Back to Search
  //     </Link>
  /* <div>
  <ul>
    <li>
      {login && (
        <Fragment>
          <strong>Username: </strong>
          {login}
        </Fragment>
      )}
    </li>
    <li>
      {company && (
        <Fragment>
          <strong>Company: </strong>
          {company}
        </Fragment>
      )}
    </li>
    <li>
      {blog && (
        <Fragment>
          <strong>Website: </strong>
          {blog}
        </Fragment>
      )}
    </li>
  </ul>
</div>;
 <div className='card text-center' />
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-primary'>Following: {following}</div>
          <div className='badge badge-primary'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-primary'>Public Gist: {public_gist}</div> */
}
