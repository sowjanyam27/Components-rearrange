import React from "react";
import "./SectionHeader.scss";

export default function SectionHeader(props) {
  return (
    <div className="component-section-header">
      <div className="title-badge">
        <div className="title-badge-title">
          {props.headerContent.badgeTitle}
        </div>
      </div>
      <h2>
        <div className="component-title ">{props.headerContent.compTitle}</div>
      </h2>
      <div className="description">{props.headerContent.description}</div>
    </div>
  );
}
