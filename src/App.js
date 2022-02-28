import axios from "axios";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/auth";
import QuoraLanding from "./components/QuoraLanding";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { logout } from "./Action/User";
import AllSpaces from "./components/QuoraLanding/AllUser";
import Quorans from './components/QuoraLanding/Quorans'
import AllUsers from './components/QuoraLanding/Spaces'


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  console.log(userLogin);

  
  const checkToken = useCallback(() => {
    const _userInfo = localStorage.getItem("userInfo");
    const token = _userInfo ? JSON.parse(_userInfo).token : "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    };
    if (token) {
      axios
        .get("/api/validateTokenExpiry", config)
        .then((res) => {
          
        })
        .catch((err) => {
         
          dispatch(logout());
        });
    }
  }, [dispatch]);

  React.useEffect(() => {
    checkToken();
    setInterval(() => {
      checkToken();
    }, 1000 * 60 * 5);
  }, [checkToken]);

 

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        userLogin?.userInfo?.auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );

  return (
    <>
      <BrowserRouter>
        <Switch>
          <main>
            <PrivateRoute exact path="/" component={QuoraLanding} />
            <PrivateRoute exact path = '/allSpaces' component = {AllSpaces} />
            <PrivateRoute exact path = '/myQuestions' component = {Quorans} />
            <PrivateRoute exact path = '/allUsers' component = {AllUsers} />
            <Route exact path="/auth" component={Auth} />
          </main>
        </Switch>
      </BrowserRouter>
    
    </>
  );
}

export default App;
