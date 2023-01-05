import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Cursor from "../../CustomCursor/cursor";

function Header() {

  return (
    <>
    <Cursor />
    <div className="header">
    <div className="tag1">
      <t /><br />
    </div>
    <div className="hedline">
      <br />
      <h1 className="letter sp1">H</h1>
      <h1 className="letter">i</h1>
      <h1 className="letter">,</h1>
      <br />

      <h1 className="letter sp1">I</h1>
      <h1 className="letter">'</h1>
      <h1 className="letter sp2">m</h1>

      <h1 id="IMP-letter" className="letter ">P</h1>
      <h1 className="letter">r</h1>
      <h1 className="letter">a</h1>
      <h1 className="letter">n</h1>
      <h1 className="letter">a</h1>
      <h1 className="letter sp2">v</h1>

      <h1 id="IMP-letter" className="letter">S</h1>
      <h1 className="letter">h</h1>
      <h1 className="letter">e</h1>
      <h1 className="letter">l</h1>
      <h1 className="letter">k</h1>
      <h1 className="letter">e</h1>
      <h1 className="letter">,</h1>
      <br />
      <h1 className="letter sp1">w</h1>
      <h1 className="letter">e</h1>
      <h1 className="letter sp2">b</h1>

      <h1 className="letter">d</h1>
      <h1 className="letter">e</h1>
      <h1 className="letter">v</h1>
      <h1 className="letter">e</h1>
      <h1 className="letter">l</h1>
      <h1 className="letter">o</h1>
      <h1 className="letter">p</h1>
      <h1 className="letter">e</h1>
      <h1 className="letter">r</h1>
    </div>
    <p className="short-line"><br /><span>Front End Developer / WordPress Expert</span><br /></p>
    <Link to={"/"}><button className="contact-btn">Contact me!</button></Link>
    <div class="scrolldown" style="--color: skyblue">
    <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
    </div>
</div>
    </>
  );
}

export default Header;
