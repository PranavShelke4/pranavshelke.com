import React from "react";
import "./Header.css";
import DeveloperImg from "../../../assets/illustrator/face1.png";
import Gamer from "../../../assets/illustrator/face2.png";

function Header() {
  let devTitle = "<Developer/>";
  let snap1 = "<HTML/>";
  let snap2 = "width : 184px; }";
  let snap3 = "class=”welcome”>";
  let snap4 = "CSS HTML5";
  let snap5 = "color:”#00”;";

  return (
    <div className="header row">
       <h1 className="devTitle" >{devTitle}</h1>
       <p className="devDis">Full Stack web-developer who <br></br> write clean and efficient code</p>
       <span className="devSnap">{snap1}</span>
        <span className="devSnap2">{snap2}</span>
        <span className="devSnap3">{snap3}</span>
        <span className="devSnap4">{snap4}</span>
        <span className="devSnap5">{snap5}</span>
      <img src={DeveloperImg} className="developer" alt="developer" />
      <img src={Gamer} className="gamer" alt="gamer" />
     
    </div>
  );
}

export default Header;
