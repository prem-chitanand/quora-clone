import React from "react";
import Feed from "./Feed.js";
import QHeader from "./Header";
import "./Quora.css";
import Sidebar from "./toolbar";
import Widget from "./application.js";

function Quora() {
  return (
    <div className="quora">
      <QHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Quora;
