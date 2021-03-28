import React, { useEffect } from "react";
import "./About.css";
import Image from "../../resources/Images/user.png";

const AboutMe = () => {
  useEffect(() => {
    const text =
      "Hello my name is?Tekadam Tresor.? I am a full stack? web developer press?here to find more ? about my projects$";
    let i = 0;
    function anime() {
      if (i < text.length) {
        if (text.charAt(i) == "?") {
          document.getElementById("demo").innerHTML += "<br />";
          i++;
        } else if (text.charAt(i) == "$") {
          document.getElementById("demo").innerHTML += "<br />";
          document.getElementById("demo").innerHTML +=
            "<button> click me</button>";
          i++;
        }
        document.getElementById("demo").innerHTML += text.charAt(i);
        i++;
      }

      setTimeout(anime, 100);
    }

    function loadText() {
      setInterval(anime, 1000);
    }
    loadText();
  }, []);
  return (
    <div className="about">
      <div className="droite">
        <div className="typewriter2" id="demo">
          <h2></h2>
        </div>
        <img src={Image} alt="User Avatar" className="image" />
      </div>
    </div>
  );
};

export default AboutMe;
