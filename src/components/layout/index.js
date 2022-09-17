import React from "react";
import { LayoutContainer } from "./styles.js";

export default function Layout({ children }) {
  return (
    <LayoutContainer style={{ width: "100%" }}>{children}</LayoutContainer>
  );
}
