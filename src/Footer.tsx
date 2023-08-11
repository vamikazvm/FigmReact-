import React from "react";
import "./index.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="box1">
          <ul>
            <li className="heading">
              <a style={{ textDecoration: "none" }} href="/Address">
                Shop Name
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/home">
                Home
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/menu">
                Menu
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/shop details">
                Shop Info
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="box2">
          <ul>
            <li className="heading">
              <a style={{ textDecoration: "none" }} href="/help">
                Customer Service
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/contact us">
                Contact Us
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/privacy policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }} href="/terms of service">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div className="box3">
          <h1>Newsletter Subscription</h1>
          <p>Be the first to know about exclusive deals.</p>
          <form className="form">
            {/* <input className="input" type="text" >
            </input> */}

<input className="input" type="text" name="email" rel="email" />
            
            <button className="btn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="box4">
        <div className="foot">© King’s Crew 2020  |  License #: C10-00000026-LIC  </div>
  <div className="icons">
  Follow Us:
  <img src="./images/icon1.png"/>
  <img src="./images/icon2.png"/>
  <img src="./images/icon3.png"/>
  </div>


      </div>
    </div>
  );
}
