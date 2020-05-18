import React from "react";
import RowItems from "../RowItems/RowItems";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionLine from "../SectionLine/SectionLine";

export default function Section(props) {
  return (
    <div>
      <div className={props.sectionClass}>
        <SectionHeader headerContent={props.headerContent} />
        <RowItems items={props.items} />
      </div>

      <SectionLine />
    </div>
  );
}
