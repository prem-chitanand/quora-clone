import React from "react";
import "./application.css";
import ApplicationContent from "./ApplicationContent.js";

function application() {
  return (
    <div className="application">
      <div className="application__header">
        <h5>Spaces to follow</h5>
      </div>
      <div className="application__contents">
        <ApplicationContent />
      </div>
    </div>
  );
}

export default application;
