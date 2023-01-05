import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";

function portfolio() {
  return (
    <div className="section">
      <div className="fake-bg">Work</div>
      <div className="portfolio-tag1">
        <h1 className="portfolio-title">My Portfolio</h1>
      </div>
      <div>
        <p
          className="portfolio-tag2"
          style={{ position: "absolute", zIndex: "100", maxWidth: "60rem" }}
        >
          <br />A small gallery of recent projects chosen by me. I've done them
          all together with amazing people from companies around the globe. It's
          only a drop in the ocean compared to the entire list.<br />
        </p>
      </div>
      <Link to={"/"}><button className="view-more-btn">See More</button></Link>
    </div>
  );
}
export default portfolio;
