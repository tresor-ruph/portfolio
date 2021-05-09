import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Image from "../../resources/Images/user4.png";
import { withRouter } from "react-router-dom";

const AboutMe = (props) => {
  let txt = useRef(null);
  let txt1 = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const text =
      "/Hi, my name is Tekadam Tresor% I am a software & web developer living in Belguim.?";
     
    let i = 0;
    let test = txt
    function anime() {
      if (i < text.length) {
        if (test.current === null) return;
        if (text.charAt(i) === "?") {
          test.current.innerHTML += "<br />";
          i++;
        } else if (text.charAt(i) === "$") {
          test.current.innerHTML += "<br />";
          // setShowButton(true);

          i++;
        }
        else if(text.charAt(i) === '/'){
          test =txt1
          // txt1.current.innerHTML += text.charAt(i);
          i++;
        }
        else if(text.charAt(i) === '%'){
          test = txt
          // txt.current.innerHTML += "</span>"
          i++
        }
        test.current.innerHTML += text.charAt(i);
        i++;
      }

      setTimeout(anime, 50);
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
        <div ref={txt1} id= 'test14'></div>
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
