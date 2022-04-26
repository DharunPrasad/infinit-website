import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./home.css";

function Terminal() {
  return (
    <div>
      Home Page
      <ProgressBar now={60}></ProgressBar>
    </div>
  );
}

export default Terminal;
