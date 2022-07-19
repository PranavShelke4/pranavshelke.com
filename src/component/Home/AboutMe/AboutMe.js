import React from "react";
import "./AboutMe.css";
import { Container } from "react-bootstrap";
import Me1 from "../../../assets/illustrator/me2.png";

function AboutMe() {
  return (
    <div className="AboutMe">
      <Container>
        <h1> ABOUT ME</h1>
        <div className="myImg" ><lebel className="myImglabel">Click me</lebel></div>
        <p className="AboutDis">👋 Hello, world! I am Pranav, a full-stack engineer from Pune, India.<br></br><br></br>
          I love to design and code 👨🏼‍💻. I build high-quality applications for the web. I concentrate on writing clean, understandable and testable code.<br></br><br></br>
          Currently, I'm completed my diploma 👨‍🎓 in Information Technology Engineering at the Government Polytechnic Awasari (KH), Pune. I love working in and as a team. I'm always looking for opportunities to learn and grow.<br></br><br></br>
          When I’m not programming, I focus on my hobbies which are: Other than coding, I'm passionate about Game​ 🎮​​ and Hacking ​🔒​💻​.</p>
      </Container>
    </div>
  );
}

export default AboutMe;
