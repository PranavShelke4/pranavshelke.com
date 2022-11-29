import React from "react";
import "./Header.css";
import DeveloperImg from "../../../assets/illustrator/face1.png";
import Gamer from "../../../assets/illustrator/face2.png";
import AssassinsCreed from "../../../assets/illustrator/AssassinsCreed.png";

function Header() {
  let devTitle = "<Developer/>";
  let snap1 = "<HTML/>";
  let snap2 = "width : 184px; }";
  let snap3 = "class=”welcome”>";
  let snap4 = "CSS HTML5";
  let snap5 = "color:”#00”;";

  return (
    <div className="header row" id="header">
      {/* Developer Side */}
       <h1 className="devTitle" >{devTitle}</h1>
       <p className="devDis">Full Stack web-developer who <br /> write clean and efficient code</p>
       <span className="devSnap">{snap1}</span>
       <span className="devSnap2">{snap2}</span>
       <span className="devSnap3">{snap3}</span>
       <span className="devSnap4">{snap4}</span>
       <span className="devSnap5">{snap5}</span>
      <img src={DeveloperImg} className="developer" alt="developer" />

      {/* Gamer Side */}
      <h1 className="gameTitle">Gamer</h1>
      <p className="gameDis">passionate about play<br /> mobile,pc games</p>
      <img src={AssassinsCreed} className="gameLogo" alt="Assassins Creed Logo" />
      <img src={Gamer} className="gamer" alt="gamer" />
     
    </div>
  );
}

export default Header;
