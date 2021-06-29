import React from "react";

const Contact = () => {
  return (
    <div>
      <section className='p-5 bg-dark '>
        <div className='row py-5'>
          <img
            className='img-fluid col-lg-6'
            src='./undraw_delivery_address_03n0.svg'
            alt='contact me by email'
          ></img>
          <div className='col-lg-6 pt-3 text-center'>
            <h2 className='text-light'>Contact Info</h2>
            <ul className='list-group list-group-flush lead text-start p-lg-5'>
              <li className='list-group-item bg-dark text-light'>
                <span className='fw-bold'>Location:</span> Cochrane, Alberta,
                Canada
              </li>
              <li className='list-group-item bg-dark text-light'>
                <span className='fw-bold'>Phone:</span> 403-542-6637
              </li>
              <li className='list-group-item bg-dark text-light'>
                <span className='fw-bold'>Email:</span> todd.r.adrian@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer className='p-5 bg-dark text-light text-center position-relative'>
        <div className='container'>
          <h6 small className='fw-light'>
            Copyright &copy; 2021 Adrian Todd
          </h6>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

// action="https://formsubmit.co/todd.r.adrian@gmail.com" method="POST"
