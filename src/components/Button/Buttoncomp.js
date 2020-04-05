import React from "react";

export default function Buttoncomp(props) {
  return (
    <button
      style={{
        alignItems: "center",
        padding: "1em",
        border: "2px solid black",
        ...props,
      }}
    >
      {props.children}
    </button>
  );
}
