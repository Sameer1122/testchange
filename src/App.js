import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Router from "./routes";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Router />
    </div>
  );
}

export default App;
