import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="section-footer">
      <img
        className="logo"
        src="https://learntocodetogether.nl/assets/logo.svg"
      />
      <div className="title">Created by</div>
      <div className="subtitle">
        Rein Op &#x27;t land &amp; Danny van der Jagt
      </div>
      <div className="team-container">
        <img
          className="team"
          src="https://learntocodetogether.nl/assets/danny&rein.svg"
        />
      </div>
    </div>
  );
}
