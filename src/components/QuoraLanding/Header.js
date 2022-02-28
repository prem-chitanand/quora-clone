import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";

import "./Header.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase";
import { logout } from "../../Action/User";
import axios from "axios";
import { token } from "../../Utils/decodedToken";
import { successModal } from "../../Utils/AlertModal";

function Header() {

  const dispatch = useDispatch();

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const userLogin = useSelector((state) => state.userLogin);


  const Close = (
    <CloseIcon
      style={{
        color: "red",
        border: " 2px solid lightgray",
        borderRadius: "3px",
      }}
    />
  );

  const handleQuestion = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    if (input !== "") {
      const body = {
        questionName: input,
        questionUrl: inputUrl,
        userId: userLogin?.userInfo?.userId
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          console.log("question added successfully");
          setIsModalOpen(false);
          successModal('Question added successfully')
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setInput("");
    setInputUrl("");
  };

  const handleLogout = () => {
    
      dispatch(logout());
      ;
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div onClick = {() => window.location.href = '/'} className="active qHeader__icon">
            <HomeIcon />
          </div>
          <div onClick = {() => window.location.href = '/allSpaces'} className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div onClick = {() => window.location.href = '/myQuestions'} className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div onClick = {() => window.location.href = '/allUsers'} className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div onClick = {() => window.location.href = '/notifications'} className="qHeader__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search Quora" />
        </div>
        <div className="qHeader__Rem">
          <div
            style={{
              border: "1px solid lightgray",
              borderRadius: "50%",
            }}
            className="qHeader__avatar"
          >
            <Avatar
              onClick={handleLogout}
              className="Avatar"
              src={
                "http://tinygraphs.com/squares/tinygraphs?theme=frogideas&numcolors=2&size=220&fmt=svg"
              }
            />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            open={IsmodalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            closeIcon={Close}
            closeOnOverlayClick={false}
            center
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar
                className="avatar"
                src={
                  "http://tinygraphs.com/squares/tinygraphs?theme=frogideas&numcolors=2&size=220&fmt=svg"
                }
              />
             
              <div className="modal__scope">
                <PeopleAltOutlinedIcon />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className="modal__fieldLink"
              >
                {/* <Link /> */}
                <input
                  style={{
                    width: "100%",
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  type="text"
                  placeholder="Optional: inclue a link that gives context"
                ></input>
                {inputUrl !== "" && (
                  <img style={{
                    height: "40vh",
                    objectFit: "contain"
                  }} src={inputUrl} alt=""></img>
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button type="sumbit" onClick={handleQuestion} className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
