import React from "react";

export default function Flex({ className, ...props }) {
  return (
    <div
      className={className}
      style={{
        alignItems: "center",
        display: "flex",
        ...props,
      }}
    >
      {props.children}
    </div>
  );
}
