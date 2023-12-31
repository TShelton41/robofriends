import React from "react";

const Scroll = (props) => {
  return (
    <div
      className="pa3"
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
