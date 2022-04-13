import React from "react";
import "./midpage.css";
import Full from "../../svgimgs/Full-Time.png";
import mail from "../../svgimgs/mail.png";
function Midpage() {
  return (
    <div>
      <div className="midBody">
        <div className="midLeft">
          <div className="containBody">
            <div className="dots"></div>
            <div className="imageBox"></div>
            <div className="alertBox">
              <h4>New job alert</h4>
              <p>20 min ago</p>
              <hr />
              <h3>Frontend developer</h3>
              <div className="full">
                <img src={Full} alt="" />
              </div>
            </div>
            <div className="massageIcon">
              <div className="msg"></div>
            </div>
          </div>
        </div>
        <div className="midRight">
            <div className="boxContainer">
                <p>join over 15000+ people</p>
                <h1>Get instant job alert on</h1>
                <h1 className="head">your mail</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris</p>
                <div className="mailBox">
                    <img className="Mimage" src={mail} alt="" />
                    <input className="mailInput" placeholder="Enter your email" type="text" />
                    
                    <button> Submit </button>
                </div>
                 </div>
        </div>
      </div>
    </div>
  );
}

export default Midpage;
