import React, { useState } from "react";
import { Fade } from "react-reveal";
import axios from "axios";
import "./contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const showSuccessMess = () => {
    document.getElementById("alertMess").innerHTML =
      "<div style='background-color: green; width: 100%; margin-top: 2rem; height: 6rem; text-align: center; font-size: 2rem; color: white'>Email send Successfully</div>";

    setTimeout(function(){
      window.location.reload()
    }, 3000)
  };
  const showErrorMessage = () => {
    document.getElementById("alertMess").innerHTML =
      "<div style='background-color: red; width: 100%; margin-top: 2rem; height: 6rem; text-align: center; font-size: 2rem; color: white'>An error occured</div>";

      setTimeout(function(){
        document.getElementById("alertMess").innerHTML =""
      }, 2000)
  }
  const submit = () => {
    if (message.length < 3 || name.length < 3 || email.length < 3) {
      return;
    }
    const data = {
      email,
      message,
      name,
    };
    axios
      .post("https://portfolio-tresor.herokuapp.com/mailTo", data)
      .then((res) => {
        console.log(res);
        showSuccessMess();
      })
      .catch((err) => {
        showErrorMessage()
        console.log(err.response)});
  };
  return (
    <section className="ftco-section">
      <div className="container ">
        <Fade bottom>
          <div className="text-center">
            <h2 className="heading-section">Contact Me</h2>
          </div>
        </Fade>
        <div className="row wrapper">
          <div className="col-md-7">
            <Fade left>
              <div>
                <div>
                  <div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(event) => handleName(event)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => handleEmail(event)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control message"
                        id="message"
                        cols="30"
                        rows="4"
                        value={message}
                        placeholder="Message"
                        onChange={(event) => handleMessage(event)}
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button className="send-btn" onClick={() => submit()}>
                      {" "}
                      Send Message
                    </button>
                  </div>
                  <div id="alertMess"></div>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-md-3 socials">
            <Fade right>
              <div className="social-div">
                <img
                  src="https://img.icons8.com/android/24/ffffff/phone.png"
                  alt="phone"
                  className="social-icons"
                />
                <span className="socialText">+32 465 42 99 16</span>
              </div>

              <div className="social-div">
                <img
                  src="https://img.icons8.com/fluent-systems-filled/48/ffffff/email.png"
                  alt="email"
                  className="social-icons"
                />
                <span className="socialText"> Tresortek.87@protonmail.com</span>
              </div>
              <div className="social-div">
                <img
                  src="https://img.icons8.com/android/24/ffffff/linkedin.png"
                  alt="linkedin"
                  className="social-icons"
                />
                <a target="_blank" href="https://www.linkedin.com/in/tresor-tekadam-970791176" rel="noreferrer">
                  <span className="socialText">Tresor Tekadam</span>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
