import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div class="custom_container">
          <div class="header_bar">
            <div class="logo">
              <Link to="/">Pick Up</Link>
            </div>
            <button class="nav_btn open_close_nav" type="button">
              <i class="fas fa-bars"></i>
            </button>
            <div class="nav_bar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About us</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/Career">Career</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/Help">Help Center</Link>
                </li>
              </ul>
            </div>
            <div class="call_us">
              <span>
                <i class="fas fa-phone-volume"></i>
              </span>
              <small>Call Now:</small>
              <a href="#1">823</a>
            </div>
          </div>
        </div>
      </header>

      <section class="responsive_nav_bar">
        <div class="cancle_nav">
          <a class="open_close_nav" href="#1">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="responsive_nav">
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about_us.html">About us</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="career.html">Career</a>
            </li>
            <li>
              <a href="contact_us.html">Contact us</a>
            </li>
            <li>
              <a href="help.html">Help Center</a>
            </li>
          </ul>
        </div>
        <div class="responsive_call_us">
          <span>
            <i class="fas fa-phone-volume"></i>
          </span>
          <small>Call Now:</small>
          <a href="#1">823</a>
        </div>
      </section>
    </div>
  );
}
export default Header;
