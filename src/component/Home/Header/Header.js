import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  // const tag1 = "<html>";
  // const tag2 = "<body>";
  // const tag3 = "<h1>";
  // const tag4 = "</h1>";
  // const tag5 = "<p>";
  // const tag6 = "</p>";

  return (
    <div className="header">
    <div className="tag1">
      <t></t><br />
    </div>
    <div className="hedline">
      <br />
      <h1 class="letter sp1">H</h1>
      <h1 class="letter">i</h1>
      <h1 class="letter">,</h1>
      <br />

      <h1 class="letter sp1">I</h1>
      <h1 class="letter">'</h1>
      <h1 class="letter sp2">m</h1>

      <h1 id="IMP-letter" class="letter ">P</h1>
      <h1 class="letter">r</h1>
      <h1 class="letter">a</h1>
      <h1 class="letter">n</h1>
      <h1 class="letter">a</h1>
      <h1 class="letter sp2">v</h1>

      <h1 id="IMP-letter" class="letter">S</h1>
      <h1 class="letter">h</h1>
      <h1 class="letter">e</h1>
      <h1 class="letter">l</h1>
      <h1 class="letter">k</h1>
      <h1 class="letter">e</h1>
      <h1 class="letter">,</h1>
      <br />
      <h1 class="letter sp1">w</h1>
      <h1 class="letter">e</h1>
      <h1 class="letter sp2">b</h1>

      <h1 class="letter">d</h1>
      <h1 class="letter">e</h1>
      <h1 class="letter">v</h1>
      <h1 class="letter">e</h1>
      <h1 class="letter">l</h1>
      <h1 class="letter">o</h1>
      <h1 class="letter">p</h1>
      <h1 class="letter">e</h1>
      <h1 class="letter">r</h1>
    </div>
    <p className="short-line"><br /><span>Front End Developer / WordPress Expert</span><br /></p>
    <Link to={"/"}><button className="contact-btn">Contact me!</button></Link>
    </div>
  );
}

export default Header;
