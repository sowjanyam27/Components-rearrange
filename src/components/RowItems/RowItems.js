import React from "react";
import RowItem from "../RowItem/RowItem";

export default function RowItems(props) {
  return (
    <div className="component-usp-row">
      {props.items.map((item) => (
        <RowItem
          key={item.source}
          inlineStyle={item.inlineStyle}
          source={item.source}
          compTitle={item.compTitle}
          title={item.title}
        />
      ))}
    </div>
  );
}
