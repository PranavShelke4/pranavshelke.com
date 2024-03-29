/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./sidebar.css";
import logo from "../../assets/icon/PS.svg";
import { Link } from "react-router-dom";

function sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to={"/"}>
          <img className="logo-img" src={logo} alt="logo" />
        </Link>
        <br />
        <span>Web Developer</span>
      </div>

      <div className="sidebar-link">
        <Link className="page-link" to={""}>
          About
        </Link>
        <Link className="page-link" to={""}>
          My Skill
        </Link>
        <Link className="page-link" to={""}>
          Works
        </Link>
        <Link className="page-link" to={""}>
          Contact
        </Link>
        <Link className="page-link" to={""}>
          Blog
        </Link>
      </div>

      <div className="social-link">
        <a target="_blank" href="https://github.com/PranavShelke4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" icon-tabler icon-tabler-brand-github"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#7b7878"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/pranav-shelke/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" icon-tabler icon-tabler-brand-linkedin"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#7b7878"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <a target="_blank" href="https://www.instagram.com/_pranav__shelke_/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" icon-tabler icon-tabler-brand-instagram"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#7b7878"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default sidebar;
