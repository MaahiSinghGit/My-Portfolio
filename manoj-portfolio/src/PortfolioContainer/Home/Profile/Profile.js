import React from "react";
import Typical from "react-typical";
import "./Profile.css";


export default function () {
 
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.instagram.com/manoj.bishtt/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/MaahiSinghGit">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/manojbishtt/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text"> Manoj </span>
            </span>
          </div>
          <div className="Portfolio-detail-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                  
                      "Ethusiastic Dev👨‍💻 ",
                        2000,
                      "Mobile Developer📱",
                        2000,
                      "Java 💻",
                      2000,
                      "React Dev⚛️  ",
                      2000,
                      "Website Dev 💻 ",
                      2000,
                 
                  ]}
                />
                </h1> 
            </span>
            <span className="profile-role-tagline">
              I'm a B.Tech(CSE) 4th Year Student in DIT University.
            </span>
          </div>
          <div className="profile-options">
            <a href="manoj.pdf" download="manoj.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
