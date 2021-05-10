import React, { useEffect, useRef } from "react";
import "./About.css";
import Image from "../../resources/Images/user3.png";
import { withRouter } from "react-router-dom";

const AboutMe = (props) => {
  let contentText = useRef(null);
  let titleText = useRef(null);

  useEffect(() => {
    const text =
      "/Hi, my name is Tekadam Tresor% I am a software & web developer living in Belguim.?";

    let i = 0;
    let selector = contentText;
    function anime() {
      if (i < text.length) {
        if (selector.current === null) return;
        if (text.charAt(i) === "?") {
          selector.current.innerHTML += "<br />";
          i++;
        } else if (text.charAt(i) === "$") {
          selector.current.innerHTML += "<br />";

          i++;
        } else if (text.charAt(i) === "/") {
          selector = titleText;
          i++;
        } else if (text.charAt(i) === "%") {
          selector = contentText;
          i++;
        }
        selector.current.innerHTML += text.charAt(i);
        i++;
      }

      setTimeout(anime, 50);
    }

    function loadText() {
      setInterval(anime, 1500);
    }
    loadText();
  }, []);

  return (
    <div className="about">
      <div className="droite">
        <div className="typewriter2" id="demo">
          <div ref={titleText} id="title"></div>
          <div ref={contentText}></div>
        </div>
        <img src={Image} alt="User Avatar" className="image" />
      </div>
    </div>
  );
};

export default withRouter(AboutMe);
