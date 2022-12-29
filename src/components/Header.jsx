import React, { Component } from "react";

// importing child Component
import Nav from "./Nav";

function Header() {
  return (
    <div className="bottom-header front-page">
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="header-title">
              Clean<span className="span-dot">.</span>Slick
              <span className="span-dot">.</span>Pixel Perfect
            </h1>
          </div>
          <div className="col-sm-8 col-sm-offset-2">
            <div className="section-description">
              lldy is a great one-page theme, perfect for developers and
              designers but also for someone who just wants a new website for
              his business. Try it now!
            </div>
            <div className="header-button">
              <a href="" className="header-button-one">
                Learn more
              </a>
              <a href="" className="header-button-two">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
