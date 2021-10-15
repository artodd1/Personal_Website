import React, { useContext, useEffect } from "react";
import GithubContext from "../../context/github/githubContext";
import {
  CheckCircleFill,
  ArrowUpCircle,
  ArrowDownCircle,
} from "react-bootstrap-icons";

export const Home = () => {
  const githubContext = useContext(GithubContext);
  const username = "artodd1";
  const { user, getGithubUser } = githubContext;

  useEffect(() => {
    getGithubUser(username);
    //eslint-disable-next-line
  }, []);

  const { name, avatar_url, location, hireable } = user;
  return (
    <div>
      <section className=' bg-dark text-light text-center pb-5'>
        <div className='container py-5 mt-1'>
          <img
            src={avatar_url}
            className='rounded-circle m-3 '
            alt='Adrian Todd'
            style={{ width: "175px" }}
          ></img>
          <h1>{name}</h1>
          <h2 className='text-secondary'>Software Developer</h2>
          <h5>{location}</h5>
          <h5 className='mb-4'>
            Hireable:{" "}
            {{ hireable } ? (
              <CheckCircleFill className='text-secondary' />
            ) : (
              <CheckCircleFill color='danger' />
            )}
          </h5>
          <div className='row pb-5'>
            <p className='col-md-4 m-auto'>
              Combining technical expertise, ambition, and strong communication
              skills to provide excellence in software development.
            </p>
          </div>
        </div>
        <a href='#summary' className='position-absolute bottom-0 end-0 p-5'>
          <ArrowDownCircle className='h1 text-secondary'></ArrowDownCircle>
        </a>
        <div id='summary'></div>
      </section>
      <section className='p-5 bg-light'>
        <div className='row'>
          <img
            className='img-fluid col-lg-6'
            src='./undraw_Mobile_application_mr4r.svg'
            alt='mobile app development animation'
          ></img>
          <div className='col-lg-6 pt-3'>
            <div className='p-2'>
              <h2>Professional Summary</h2>
              <p className=''>
                Motivated, energetic, and dedicated Jr. Software Developer.
                Self-starter with a detail-oriented mindset and driven to
                achieve high standards of quality. Proactive approach to problem
                solving and a strong ability to take initiative and understand
                complex concepts. Personable, adaptable and possess an eagerness
                for knowledge with a commitment to ongoing personal and
                professional development.{" "}
              </p>
              <h2>Core Competencies</h2>
              <ul>
                <li>Critical Thinking</li>
                <li>Analytical Problem Solving</li>
                <li>Written and Oral Communication</li>
                <li>Passion for Learning</li>
                <li>Strong Work Ethic</li>

                <li>Adaptability and Flexibility</li>
                <li>Detail Oriented</li>
                <li>Teamwork and Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='education' className='bg-dark text-light p-5'>
        <div className='row'>
          <div className='col-lg-6 pt-3'>
            <h2>Education</h2>
            <ul>
              <li>
                <span className='text-secondary'>
                  Software Development Diploma,
                </span>{" "}
                Bow Valley College, Calgary, AB &emsp;{" "}
                <span className='text-secondary'>2019-2021</span>
              </li>
              <li>
                <span className='text-secondary'>
                  Timber Framing Certificate,
                </span>{" "}
                College of the Rockies, Cranbrook, BC &emsp;{" "}
                <span className='text-secondary'>2016</span>
              </li>
              <li>
                <span className='text-secondary'>Geology Program,</span>{" "}
                University of Clagary &emsp;{" "}
                <span className='text-secondary'>2012-2015</span>
              </li>
            </ul>
            <h5>Software Development Diploma Courses</h5>
            <ul className='list-group bg-dark d-flex flex-row flex-wrap list-group align-items-center list-unstyled mb-3'>
              <li
                className='list-item badge bg-secondary m-1 text-dark arrow'
                data-toggle='tooltip'
                title='C++, Types, Conditionals, Loops, Arrays, Sorting, Pointers'
              >
                SODV1101 Programming Fundamentals
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                <span>TECH1101 Web and Internet Fundamentals</span>
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                TECH1102 Internet of Things
              </li>
              <li className='list-item badge text-wrap bg-secondary m-1 text-dark'>
                MGMT1103 Introduction to Project Teams and Technical
                Communications
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                MATH 1901 Math for the Computer Industry
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                DATA1201 Introduction to Relational Databases
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                DESN2301 User Experience Design
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV1201 Introduction to Web Programming
              </li>
              <li className='list-item badge text-wrap bg-secondary m-1 text-dark'>
                SODV1202 Introduction to Object-Oriented Programming
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                TECH1201 Networking Essentials
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                DATA2201 Relational Databases
              </li>
              <li className='list-item badge text-wrap bg-secondary m-1 text-dark'>
                MGMT1104 Introduction to Project Management for IT
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV2101 Rapid Application Development
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV2201 Web Programming
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV2202 Object-Oriented Programming
              </li>
              <li className='list-item badge text-wrap bg-secondary m-1 text-dark'>
                SODV2203 Introduction to Game and Simulation Programming
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV2401 Algorithms and Data Structures
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV299 Software Development Capstone
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                SODV3203 Mobile Application Development
              </li>
              <li className='list-item badge bg-secondary m-1 text-dark'>
                TECH2102 Enterprise Computing
              </li>
            </ul>
          </div>
          <img
            className='img-fluid col-lg-6'
            src='./undraw_programming_2svr (1).svg'
            alt='mobile app development animation'
          ></img>
        </div>
      </section>
      <section
        id='technical'
        className='p-5 bg-light text-center text-sm-start'
      >
        <div className='row'>
          <div className='m-auto'>
            <h2 className='mb-5'>Technical Skills</h2>
            <h5 className='d-flex justify-content-center mb-5'>
              Programming Languages and Frameworks I Use
            </h5>
            <ul className='bg-light d-inline-flex flex-row flex-wrap list-group align-items-center  list-unstyled'>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./Csharp_Logo.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./net-logo.png'
                />{" "}
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./128px-Xamarin-logo.svg.png'
                />{" "}
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./asp_net.jpg'
                />
              </li>

              <li>
                <img
                  className='p-1'
                  style={{ width: "100px", height: "100px" }}
                  src='./128px-JavaScript-logo.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./128px-React-icon.svg.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./128px-Node.js_logo.svg.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./express-logo.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "200px", height: "100px" }}
                  src='./CSS3_and_HTML5_logos_and_wordmarks.svg.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./Bootstrap_logo.svg.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./microsoft-sql-server-logo.png'
                />{" "}
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./mysql-logo-2.png'
                />{" "}
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./mongodb-logo.png'
                />
              </li>

              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./java-logo-1.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./Android_logo_2019_(stacked).svg.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./php-logo-1.png'
                />
              </li>
              <li>
                <img
                  className='p-1 px-4'
                  style={{ width: "100px" }}
                  src='./c-logo.png'
                />
              </li>
              <li>
                <img
                  className='p-1'
                  style={{ width: "100px" }}
                  src='./python-logo-1.png'
                />
              </li>
            </ul>
            <div className='d-flex flex-wrap'>
              <div className='col-md-4 col-12'>
                <h5 className='my-5 d-flex justify-content-center'>
                  Integrated Development Environments
                </h5>
                <ul className='list-group d-flex flex-row flex-wrap align-items-center justify-content-center list-unstyled'>
                  <li>
                    <img
                      className='p-3'
                      style={{ width: "100px" }}
                      src='./Visual_Studio_Icon_2019.svg.png'
                    />
                  </li>
                  <li>
                    <img
                      className='p-3'
                      style={{ width: "100px" }}
                      src='./128px-Visual_Studio_Code_1.35_icon.svg.png'
                    />
                  </li>
                  <li>
                    <img
                      className='p-1 m-2'
                      style={{ width: "100px" }}
                      src='./Android_Studio_Trademark.svg.png'
                    />
                  </li>
                  <li>
                    <img
                      className='p-1 m-2'
                      style={{ width: "100px" }}
                      src='./256px-Eclipse-Luna-Logo.svg.png'
                    />
                  </li>
                </ul>
              </div>
              <div className='col-md-4 col-12'>
                <h5 className='my-5 d-flex justify-content-center'>
                  Source Control
                </h5>
                <ul className='list-group d-flex flex-row align-items-center justify-content-center list-unstyled'>
                  <li>
                    <img
                      className='p-1 m-2'
                      style={{ width: "100px" }}
                      src='./128px-Git-logo.svg.png'
                    />
                  </li>
                  <li>
                    <img
                      className='p-3'
                      style={{ width: "100px" }}
                      src='./GitHub_Mark.png'
                    />
                  </li>
                </ul>
              </div>
              <div className='col-md-4 col-12'>
                <h5 className='my-5 d-flex justify-content-center'>
                  Agile Methodologies
                </h5>
                <ul className='d-flex flex-wrap justify-content-center'>
                  <li className='card align-items-center justify-content-center m-1'>
                    <img
                      className='p-3 card-img-top'
                      style={{ width: "200px" }}
                      src='./256px-Simple-kanban-board-.jpg'
                    />
                    <p className='card-title'>Kanban</p>
                  </li>
                  <li className='card align-items-center justify-content-end m-1'>
                    <img
                      className='p-3 card-img-top'
                      style={{ width: "200px" }}
                      src='./Scrum_diagram_(no_labels).png'
                    />
                    <p className='card-title'>Scrum</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='projects' className='p-sm-5 p-2 bg-dark'>
        <h2 className='text-light mb-5'>Projects I've Completed</h2>
        <div className='row g-5'>
          <div className='col-lg-4 col-md-6'>
            <div className='card p-3'>
              <img
                src='./personalWebsite.png'
                class='card-img-top mb-3'
                alt='...'
              />
              <ul className='list-group-flush d-flex flex-row flex-wrap align-items-center list-unstyled mb-3'>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  React
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Node.js
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Bootstrap
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Github API
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Postman
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Github Pages
                </li>
              </ul>
              <h5 className='card-title mb-3'>Personal Website</h5>
              <h6 className='card-subtitle mb-3'></h6>
              <ul className='card-text'>
                <li>
                  I built this responsive website to showcase some of my skills
                  as a software developer.
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='card p-3'>
              <img
                src='./TextbookImage1.jpg'
                class='card-img-top mb-3'
                alt='...'
              />
              <ul className='list-group-flush d-flex flex-row flex-wrap align-items-center list-unstyled mb-3'>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  React
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Express.js
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Node.js
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  MongoDB
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  JSON Web Tokens
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Google Text-to-speech API
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  Postman
                </li>
              </ul>
              <h5 className='card-title mb-3'>Canadian Drug Speak</h5>
              <h6 className='card-subtitle mb-3'>
                Bow Valley College Software Development Capstone Project
              </h6>
              <ul className='card-text'>
                <li>
                  Designed and built a full stack web application for the School
                  of Health and Wellness at Bow Valley Collge using the MERN
                  stack
                </li>
                <li>
                  This application facilitates learning the proper pronunciation
                  and spelling of pharmaceutical drug names for students in the
                  Pharmacy Technician Program.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='card p-3'>
              <img
                src='./ContactKeeperDesktopApp.png'
                class='card-img-top mb-3'
                alt='...'
              />
              <ul className='list-group-flush d-flex flex-row flex-wrap align-items-center list-unstyled mb-3'>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  C#
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  WinForms
                </li>
                <li className='list-item badge bg-dark m-1 text-secondary'>
                  T-SQL
                </li>
              </ul>
              <h5 className='card-title mb-3'>My Address Book</h5>
              <h6 className='card-subtitle mb-3'>
                SODV 2101 - Rapid Application Development Course Project
              </h6>
              <ul className='card-text'>
                <li>
                  A windows desktop application for storing your contacts.
                </li>
                <li>
                  The UI was created using WinForms and the application
                  implements full CRUD functionality using a simple custom SQL
                  database.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='experience' className='p-sm-5 p-2 bg-light'>
        <h2 className='text-dark mb-5'>Past Work Experience</h2>
        <div className='row g-5'>
          <div className='col-lg-4 col-md-6'>
            <div className='card bg-dark text-light p-3'>
              <img src='./confluence.jpg' class='card-img-top mb-3' alt='...' />
              <h5 className='card-title mb-3'>Assistant Distiller</h5>
              <h6 className='card-subtitle mb-3'>Confluence Distilling</h6>
              <ul className='card-text'>
                <li>
                  Assissted in the production of craft spirits and cocktails,
                  including distilling, bottling, quality control, health and
                  safety measures, packaging, warehouse tracking, delivery,
                  cleaning, and website development
                </li>
                <li>
                  Efficiently completed daily responsibilities with a positive
                  and cooperative attitude, contributing to an effective team.
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='card bg-dark text-light p-3'>
              <img
                src='./timber-frame-truss.jpg'
                class='card-img-top mb-3'
                alt='...'
              />
              <h5 className='card-title mb-3'>Timber Frame Carpenter</h5>
              <h6 className='card-subtitle mb-3'>
                International Timber Frames
              </h6>
              <ul className='card-text'>
                <li>
                  Crafted high-quality timber frame structures with precision
                  layout, fabrication, joinery, and installation.
                </li>
                <li>
                  Demonstrated attention to detail and quality by adhering to
                  blueprints, drawings, and specifications.{" "}
                </li>
                <li>
                  Increased productivity by creating jigs and templates to
                  streamline workshop processes.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='card bg-dark text-light p-3'>
              <img
                src='./petrel-robertson-consulting-ltd.png'
                class='card-img-top mb-3'
                alt='...'
              />
              <h5 className='card-title mb-3'>Student Geological Technician</h5>
              <h6 className='card-subtitle mb-3'>
                Petrel Robertson Consulting Ltd.
              </h6>
              <ul className='card-text'>
                <li>
                  Collaborated with and learned from a team of Geologists and
                  Geophysicists.
                </li>
                <li>
                  Data management with MS Excel, mapping with ArcGIS, and
                  digital core log creation with core logging software.{" "}
                </li>
                <li>
                  Developed analytical problem-solving skills while conducting a
                  regional study of the major oil sands deposits in Alberta and
                  Western Canada.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className='p-5 bg-dark '>
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
                <span className='fw-bold'>Location:</span> Calgary Metropolitan
                Area, Alberta, Canada
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
      <footer className='p-1 bg-dark text-light text-center position-relative'>
        <div className='container'>
          <h6 small className='fw-light'>
            Copyright &copy; 2021 Adrian Todd
          </h6>
          <a href='#' className='position-absolute bottom-0 end-0 p-5'>
            <ArrowUpCircle className='h1 text-secondary'></ArrowUpCircle>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
