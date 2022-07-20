import React, { useEffect } from "react";
import { Form, Button, Input } from "antd";

import "./welcome.css";
import { GoogleLogin } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handelSucces = (credentialResponse) => {
    console.log(credentialResponse);
    navigate("/posts");
  };
  return (
    <div className="search-div">
      <h1 style={{ color: "#7763FA" }}>BLOG</h1>
      <div className="signInButton">
        <GoogleLogin
          onSuccess={handelSucces}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Welcome;
