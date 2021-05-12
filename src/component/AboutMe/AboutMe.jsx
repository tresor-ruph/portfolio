import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import Image from "../../resources/Images/user3.png";
import { withRouter } from "react-router-dom";
import {Zoom} from 'react-reveal'

const AboutMe = (props) => {
  let contentText = useRef(null);
  let titleText = useRef(null);
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const text =
      "/Hi, my name is Tekadam Tresor% I am a software & web developer living in Belguim.?";

    let i = 0;
    let selector = contentText;
    function anime() {
      if (i < text.length) {
        if (selector.current === null) return;
        if (text.charAt(i) === "?") {
          selector.current.innerHTML += "<br>";
          setShowBtn(true)
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
        {showBtn && <Zoom left>
        <a className='btn-cv' href='https://github.com/tresor-ruph/portfolio/files/6469084/Tresor_Tekadam_-_Full_Stack_Developer.pdf'>Download resume</a>
        </Zoom>}
        <img src={'https://user-images.githubusercontent.com/52448401/118041515-3105b280-b373-11eb-8364-dc8bc64484c3.png' ||Image} alt="User Avatar" className="image" />
      </div>
    </div>
  );
};

export default withRouter(AboutMe);
