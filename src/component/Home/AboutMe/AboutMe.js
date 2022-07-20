import React from "react";
import "./AboutMe.css";
import { Container } from "react-bootstrap";
import Html from "../../../assets/icon/Html.png"
import Css from "../../../assets/icon/CSS3.png"
import Bootstrap from "../../../assets/icon/Bootstrap.png"
import JavaScript from "../../../assets/icon/JavaScript.png"
import ReactJS from "../../../assets/icon/ReactJs.png"
import NodeJS from "../../../assets/icon/NodeJs.png"
import MongoDB from "../../../assets/icon/MongoDB.png"
import Git from "../../../assets/icon/Git.png"
import Firebase from "../../../assets/icon/Firebase.png"
import Figma from "../../../assets/icon/Figma.png"


function AboutMe() {
  return (
    <div className="AboutMe" id="AboutMe">
      <Container>
        <h1> ABOUT ME</h1>
        <div className="myImg" />
        <p className="AboutDis">👋 Hello, world! I am Pranav, a full-stack engineer from Pune, India.<br></br><br></br>
          I love to design and code 👨🏼‍💻. I build high-quality applications for the web. I concentrate on writing clean, understandable and testable code.<br></br><br></br>
          Currently, I'm completed my diploma 👨‍🎓 in Information Technology Engineering at the Government Polytechnic Awasari (KH), Pune. I love working in and as a team. I'm always looking for opportunities to learn and grow.<br></br><br></br>
          When I’m not programming, I focus on my hobbies which are: Other than coding, I'm passionate about Game​ 🎮​​ and Hacking ​🔒​💻​.</p>
      <h1>PROFICIENT SKILLS</h1>
      <div className="skills">
      <img className="LanguagesIcon" src={Html} alt="html" />
      <img className="LanguagesIcon" src={Css} alt="css" />
      <img className="LanguagesIcon" src={Bootstrap} alt="bootstrap" />
      <img className="LanguagesIcon" src={JavaScript} alt="javascript" />
      <img className="LanguagesIcon" src={ReactJS} alt="reactjs" />
      <img className="LanguagesIcon" src={NodeJS} alt="nodejs" />
      <img className="LanguagesIcon" src={MongoDB} alt="mongodb" />
      <img className="LanguagesIcon" src={Git} alt="git" />
      <img className="LanguagesIcon" src={Firebase} alt="firebase" />
      <img className="LanguagesIcon" src={Figma} alt="figma" />
      </div>
      </Container>
    </div>
  );
}

export default AboutMe;
