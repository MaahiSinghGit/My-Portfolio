import React, { useState } from "react";
import imgBack from "../../assets/contactme/contact.png";
import load1 from "../../assets/contactme/load2.gif";
import axios from "axios";
import { toast } from "react-toastify";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollServices from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Typical from "react-typical";
import "./ContactMe.css";
import { async } from "rxjs";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollServices.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep In Touch"} title={"Contact Me"} />

      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Get in Touch 🤝",
                2000,
              ]}
            />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="img not found" />
          </div>
          <form action="https://formspree.io/f/mdobvzej"
  method="POST">
            <p>{banner}</p>
            <label for="name">Name</label>
            <input type="text"  id="name" name="name" onChange={handleName} value={name} />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleEmail} value={email} />
            <label for="message">Message</label>
            <textarea type="text" id="message" name="message" onChange={handleMessage} value={message} />
            <div className="send-btn">
           
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} />
                  </b>
                ) : (
                  ""
                )}
              </button>
             
            </div>
          </form>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}
