import React, { FC } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setUserAuth } from "../store/action-creators/setUserAuth";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyles.css";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authTo = (success: any) => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_API_TOKEN,
        plugin_name: "chat",
      });
    });
    console.log(success);
    dispatch(setUserAuth(success.profileObj));
    navigate("/");
  };

  return (
    <div className="loginComponent">
      <div className="LoginBackground"></div>
      <div className="LoginWrapper">
        <div className="LoginContainer">
          <div className="LoginTitle">art-gallery</div>
          <GoogleLogin
            className="signButton"
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            onSuccess={authTo}
            onFailure={() => alert("Произошла ошибка")}
            cookiePolicy="single_host_origin"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
