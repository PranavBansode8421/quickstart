import React from "react";
import "../css/Home.css";
const Home = () => {
  return (
    <div className="homejsx p-3">
      
      <div className="container">
        <div className="row m-auto">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <h1 className="titlehead">Welcome to QuickStart</h1>
            <p className="titlesub">Quickly start your project now and set the stage for success</p>
            <button className="btn  button1 ">Get Started</button>
            <svg id="playbtn"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-play-circle playbtn"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
            </svg>
            <span className="vido" >Watch Video</span>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <img className="imgg" src="./10002.webp" alt="intro IMG" />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
