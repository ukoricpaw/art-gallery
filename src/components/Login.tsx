import React, { FC } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { userPayloadType } from "../types/userType";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setUserAuth } from "../store/action-creators/setUserAuth";
import { useNavigate } from "react-router-dom";
import "../styles/loginStyles.css";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authTo = (success: any) => {
    dispatch(setUserAuth(success.credential));
    navigate("/");
  };

  return (
    <div className="loginComponent">
      <div className="LoginBackground"></div>
      <div className="LoginWrapper">
        <div className="LoginContainer">
          <div className="LoginTitle">art-gallery</div>
          <GoogleLogin
            onSuccess={authTo}
            onError={() => alert("Произошла ошибка")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
