import React from "react";

export const About = () => {
  return (
    <section className='bg-dark text-light p-5 text-center text-sm-start'>
      <div className='container'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div>
            <h1>Junior Software Developer</h1>
            <p>Software Development Diploma Graduate</p>
          </div>
          <img
            className='img-fluid w-50'
            src='../../../undraw_Mobile_application_mr4r.svg'
            alt='mobile app development animation'
          ></img>
        </div>
      </div>
    </section>
  );
};

export default About;
