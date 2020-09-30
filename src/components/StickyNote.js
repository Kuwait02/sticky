import React from "react";
import "./StickyNote.css";

const StickyNote = (props) => {
  return (
    <div style={props.style}>
      <a href="#">
        <h2>Title #1</h2>
        <p>Text Content #1</p>
      </a>
    </div>
  );
};

export default StickyNote;
