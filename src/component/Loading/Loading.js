import React from "react";
import "./Loading.css";
import bgVideo from "../../assets/video/loading.mp4";

function Loading() {
  return (
    <div className="ls">

      <video className="videoTag" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="loadingIcon">
        <div className="spinner-box">
          <div className="blue-orbit leo"></div>

          <div className="green-orbit leo"></div>

          <div className="red-orbit leo"></div>

          <div className="white-orbit w1 leo"></div>
          <div className="white-orbit w2 leo"></div>
          <div class="white-orbit w3 leo"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
