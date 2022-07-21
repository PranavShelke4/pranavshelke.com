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
import Gmail from "../../../assets/icon/Gmail.png"
import LinkedIn from "../../../assets/icon/LinkedIn.png"
import Github from "../../../assets/icon/GitHub.png"
import Twitter from "../../../assets/icon/Twitter.png"
import Instagram from "../../../assets/icon/Instagram.png"



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
      <img className="LanguagesIcon" title="HTML" src={Html} alt="html" />
      <img className="LanguagesIcon" title="CSS" src={Css} alt="css" />
      <img className="LanguagesIcon" title="Bootstrap" src={Bootstrap} alt="bootstrap" />
      <img className="LanguagesIcon" title="Java Script" src={JavaScript} alt="javascript" />
      <img className="LanguagesIcon" title="React JS" src={ReactJS} alt="reactjs" />
      <img className="LanguagesIcon" title="Node JS" src={NodeJS} alt="nodejs" />
      <img className="LanguagesIcon" title="MongoDB" src={MongoDB} alt="mongodb" />
      <img className="LanguagesIcon" title="Git" src={Git} alt="git" />
      <img className="LanguagesIcon" title="Firebase" src={Firebase} alt="firebase" />
      <img className="LanguagesIcon" title="Figma" src={Figma} alt="figma" />
      <br></br>

      <img className="SocialIcon" src={Gmail} alt="gmail" />
      <img className="SocialIcon" src={Github} alt="github" />
      <img className="SocialIcon" src={LinkedIn} alt="linkedin" />
      <img className="SocialIcon" src={Twitter} alt="twitter" />
      <img className="SocialIcon" src={Instagram} alt="instagram" />

      </div>
      </Container>
    </div>
  );
}

export default AboutMe;
