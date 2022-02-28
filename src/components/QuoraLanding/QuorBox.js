import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "./QuoraBox.css";

export default function QuorBox() {


  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar
          src={
            "http://tinygraphs.com/squares/tinygraphs?theme=frogideas&numcolors=2&size=220&fmt=svg"
          }
          className="quoraBox__infoAvatar"
        />

      </div>
      <div className="quoraBox__quora">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
