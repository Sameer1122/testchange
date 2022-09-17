import React from "react";

export default function Container({ children }) {
  return (
    <div
      style={{
        width: "84vw",
        borderTopLeftRadius: 55,
        borderBottomLeftRadius: 55,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
