import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div id="header" className="section-header scroll">
      <a href="./">
        <img
          className="icon"
          src="https://learntocodetogether.nl/assets/icon.svg"
        />
      </a>
      <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
        <img
          className="meetup-icon"
          src="https://learntocodetogether.nl/assets/meetup-icon.svg"
        />
      </a>
      <nav>
        <a href="/courses.html">Our Courses</a>
      </nav>
    </div>
  );
}
