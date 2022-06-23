import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Project.css'

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollServices from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import logo from '../../assets/Testimonial/logo.jpg';
import bmi from '../../assets/Testimonial/bmi.png';
import portfolio from '../../assets/Testimonial/portfolio.jpg';
import hills from '../../assets/Testimonial/hills.jpg'

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options={
      loop: true,
      margin:0,
      nav:true,
      animateIn:"bounceInRight",
      animateOut:"bounceOutRight",
      dots:true,
      autoplay:true,
      smartspeed:500,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:1,
        },
        1000:{
          items:3,
        }
      }
    }




  return (
    <div>
      <ScreenHeading title={"Project"} subHeading={"What I did Yet"} />
      <section className="Project-section fade-in" id={props.id || ""}>
        <div className="container">
          <OwlCarousel className="owl-carousel" id="project-carousel" {...options}>
            <div className="col-lg-12">
              <div className="testi-items">
                <div className="testi-comment">
                  <p>
                   
                   An Educational FrontEnd Website like JavaTpoint.com and W3Schoool.com.
                   
                  </p>
                </div>
                <div className="client-info">
                <a href="https://github.com/MaahiSinghGit/CSEngineering4u.com">
                  <img src={logo} alt="no internet"></img>
                  </a>
                  <h5>CSEngineering4u</h5>
                  <p>HTML, CSS, JavaScript & React.js</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
  <div className="testi-items">
    <div className="testi-comment">
      <p>
       
        BMI Calculator is a simple App for claculate person's Body Mass Index according to their height and weight.
      
      </p>
    </div>
    <div className="client-info">
    <a href="https://github.com/MaahiSinghGit/bmi_calculator_flutter">
      <img src={bmi} alt="no internet"></img>
      </a>
      <h5>BMI Calculator App</h5>
      <p>Dart, Flutter & Android Studio </p>
    </div>
  </div>
</div>
<div className="col-lg-12">
  <div className="testi-items">
    <div className="testi-comment">
      <p>
      
        A Personal Portfolio website to showcase all my details and projects at one place.
       
      </p>
    </div>
    <div className="client-info">
    <a href="#">
      <img src={portfolio} alt="no internet"></img>
      </a>
      <h5>Portfolio Website</h5>
      <p>HTML, CSS, JavaScript & React.js</p>
    </div>
  </div>
</div>
<div className="col-lg-12">
  <div className="testi-items">
    <div className="testi-comment">
      <p>
       
        Exploring The Hills,FrontEnd Website for Tourists And Guide(Uttarakhand).
      
      </p>
    </div>
    <div className="client-info">
    <a href="https://maahisinghgit.github.io/Exploring-The-Hills/">


      <img src={hills} alt="no internet"></img>
      </a>
      <h5>Exploring-The-Hills</h5>
      <p>HTML, CSS & JavaScript</p>
    </div>
    
  </div>



</div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
}
