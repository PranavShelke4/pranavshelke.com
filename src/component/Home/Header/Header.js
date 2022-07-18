import React from "react";
import "./Header.css";
import Developer from "../../../assets/illustrator/face1.svg";
import Gamer from "../../../assets/illustrator/face2.svg";

function Header() {
  return (
    <div className="header row">
      <img src={Developer} className="developer" alt="developer" />
      <img src={Gamer} className="gamer" alt="gamer" />
    </div>
  );
}

export default Header;
