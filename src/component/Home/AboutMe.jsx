import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Image from "../../resources/Images/user.png";
import { withRouter } from "react-router-dom";

const AboutMe = (props) => {
  let txt = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const text =
      "Hello my name is?Tekadam Tresor.? I am a full stack? web developer press?here to find more ? about my projects$";
    let i = 0;
    function anime() {
      if (i < text.length) {
        if (txt.current === null) return;
        if (text.charAt(i) === "?") {
          txt.current.innerHTML += "<br />";
          i++;
        } else if (text.charAt(i) === "$") {
          txt.current.innerHTML += "<br />";
          setShowButton(true);

          i++;
        }
        txt.current.innerHTML += text.charAt(i);
        i++;
      }

      setTimeout(anime, 100);
    }

    function loadText() {
      setInterval(anime, 1500);
    }
    loadText();
  }, []);
  const handleTest = () => {
    props.history.push(`/Portfolio`);
  };
  return (
    <div className="about">
      <div className="droite">
        <div className="typewriter2" id="demo">
          <div ref={txt}></div>
          <div>
            {showButton && <button onClick={() => handleTest()}>go to</button>}
          </div>
        </div>
        <img src={Image} alt="User Avatar" className="image" />
      </div>
    </div>
  );
};

export default withRouter(AboutMe);
