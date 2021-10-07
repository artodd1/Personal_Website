import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navmenu'
          aria-controls='navmenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navmenu'>
          <Link
            className='navbar-brand mx-5 text-center mt-0 nav-item '
            to='/Personal_Website/'
          >
            <h1 className='fw-light mt-0 p-0'>A/T</h1>
            <h6 small className='fw-light'>
              Software Developer
            </h6>
          </Link>
          <ul className='navbar-nav ms-auto navbar-collapse'>
            <li className='nav-item'>
              <Link className='nav-link ' to='/Personal_Website/'>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <Link className='navbar-brand m-1' to='./pages/Home.js'>
<h1 className='p-2'>Adrian Todd</h1>
</Link> */
}
