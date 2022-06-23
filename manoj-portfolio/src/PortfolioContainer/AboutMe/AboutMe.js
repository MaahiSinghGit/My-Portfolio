import React, { useEffect } from "react";
import './AboutMe.css'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollServices from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "I'm a tech enthusiast who enjoy connecting different ideas which came from different people, different teams or different industries. I have an academic background in Batchlor of Technology in Computer Science and Engineering, and I have also diploma in same field. I am looking for an enrty level position to kickstart my career in the IT industry with a focus on software development roles.",
    highlights: {
      bullets: [" Web Developer", " Mobile Developer", " Java"],
      heading: "Here are a few Highlights:",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob">
          <span>{value}</span>
        </div>
      </div>
    ));
  };
  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
             
              <a href="manoj.pdf" download="manoj.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
