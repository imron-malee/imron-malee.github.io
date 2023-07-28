import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile from "../../images/profile.jpg";
import "bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';
import "../../css/styles.css";

export default function Template() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    document.title = "About - Imron Malee";
    const metaTag = document.querySelector('meta[property="og:image"]');
    if (metaTag) {
      metaTag.setAttribute("content", profile);
    }
  }, []);




  const fetchData = async () => {
    let config = {
      method: 'get',
      url: 'https://aboutme-api-imronmalee.vercel.app/api/getbyname/Imron%20Malee?v=444',
      headers: { }
    };

    try {
      //const response = await axios.get('https://aboutme-api-imronmalee.vercel.app/api/getbyname/Imron%20Malee'); 
      const response = await axios(config); 
      if(response.status===200){
        setData(response.data.Result);
      }
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <title>About - Imron Malee</title>
      <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
      {/* Font Awesome icons (free version)*/}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Google fonts*/}
      <link
        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
        rel="stylesheet"
        type="text/css"
      />

      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{data.fullname}</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profile}
              alt={data.fullname}
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content*/}
      <div className="container-fluid p-0">
        {/* About*/}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Mr.Imron
              <span className="text-primary">Malee</span>
            </h1>
            <div className="subheading mb-5">
              {data.address}
              {/* <a href="mailto:imron.malee@gmail.com">imron.malee@gmail.com</a> */}
            </div>
            <p className="lead mb-5">
              {data.about}
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/imron-malee/"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="social-icon"
                href="https://github.com/ronslowlife/"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="social-icon"
                href="https://gitlab.com/imron.malee"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fab fa-gitlab" />
              </a>
              <a className="social-icon" href="mailto:imron.malee@gmail.com">
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Experience*/}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            {data.experience ? (
                data.experience.map((value, key) => {
                  return (
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={key}>
                      <div className="flex-grow-1">
                        <h3 className="mb-0">{value.position}</h3>
                        <div className="subheading mb-3">{value.company}</div>
                        <p>
                         {value.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-primary">{value.duration}</span>
                      </div>
                    </div>
                  )
                })
                
                
            ) : (
              <>ssss</>
            )}
            
          </div>
        </section>
        <hr className="m-0" />
        {/* Education*/}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Computer Science</h3>
                <div className="subheading mb-3">Yala Rajabhat University</div>
                <p>
                  Certificate : Bachelor's Degree, Computer Science
                  <br />
                  Faculty : Faculty of Science, Technology and Agriculture
                  <br />
                  The Committee of the Student Club, Faculty of Science,
                  Technology, and Agriculture
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Graduated in 2015</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Skills*/}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              
              <li className="list-inline-item">
                <i className="fab fa-php" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-html5" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item custom-icon">
                <i className="fab fa-codeigniter"/>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-laravel" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
              
              
              <li className="list-inline-item">
                <i className="fab fa-gitlab" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-github" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-gitkraken" />
              </li>
              
            </ul>
            
          </div>
        </section>
        <hr className="m-0" />
        {/* Interests*/}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
      </div>
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
    </div>
  );
}
