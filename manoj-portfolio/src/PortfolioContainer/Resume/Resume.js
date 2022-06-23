import React, { useState, useEffect } from "react";
import "./Resume.css";
import ScrollServices from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Animations from "../../utilities/Animations";
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    // { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Training", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "Dart", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 60 },
    { skill: "MongoDB", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Advanced Java", ratingPercentage: 50 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "Javascript", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: "Basics of Java With DSA",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Coding Ninja.",
      subHeading: "Technologies: JAVA, Data Structure and Algorithms",
    },
    {
      title: "MERN Stack",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Udemy",
      subHeading: "Technologies: HTML, CSS, JavaScript, React.js, MongoDB",
    },
    {
      title: "Flutter Development",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Udemy",
      subHeading: "Technologies:  Flutter, Android Studio, Dart",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"DIT University , Dehradun"}
        subHeading={"BTech in Computer Science & Engineering"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Govt. Polytechnic, Kashipur"}
        subHeading={"Diploma in Computer Science & Engineering"}
        fromDate={"2017"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Govt. Inter Collage, Amori"}
        subHeading={"10th Uttarakhand Board"}
        fromDate={"2013"}
        toDate={"2015"}
      />
    </div>,

   /* <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"The Sparks Foundation"}
          subHeading={"Mobile App Developer Intern"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as an Android app developer and worked on a project.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Built an Android Application designed to record the money
            transactions from one user to another. showing various screens
            like-Transaction history, Users, Money left etc.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated app with SQL for managing the database.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope the logic as per the
            given requirement.
          </span>
          <br />
        </div>
      </div>
    </div>, */

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gaining new skills"
        description="I am always eager to learn new skills and help myself grow."
      />
      <ResumeHeading
        heading="Reading Books"
        description="I love to Read Books in my free time"
      />
      <ResumeHeading
        heading="Playing Cricket and Badminton"
        description="As outdoor games are necessary for staying fit, i like playing them. "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops no internet connection"
        />
        <span className="buller-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
