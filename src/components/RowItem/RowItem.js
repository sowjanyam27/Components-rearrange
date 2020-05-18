import React from "react";

export default function RowItem(props) {
  return (
    <div className="item team">
      <img className="image" src={props.source} style={props.inlineStyle} />
      <div className="component-title title">{props.compTitle}</div>
      <div className="description">{props.title}</div>
    </div>
  );
}
