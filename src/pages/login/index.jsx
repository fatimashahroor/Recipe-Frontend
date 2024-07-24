import "./style.css";
import React, { useState, useEffect } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { useNavigate } from "react-router-dom";
import { authLocal } from "./auth-local";
import { authRemote } from "./auth-remote";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);

    const loginHandler = async () => {
        const data = await authRemote.login(email, password);
        if (data.status === "authenticated") {
          authLocal.saveToken(data.token);
          navigate("/home");
        } else {
          setErrorMessage(true);
        }
      };

    
    return (
        <div className="flex column center page ">
            <h1>Welcome to Recipes At Your Fingertips</h1>
            <div className="flex column center backgroundColor rounded">
                <h2>Login</h2>
                <Input placeholder={"name@gmail.com"}
                        label={"Email"}
                        type={"text"}
                        onTextChange={(e)=>{
                            setErrorMessage(false);
                            setEmail(e.target.value);
                        }}
                />
                <Input
                    label={"Password"}
                    placeholder={"your password"}
                    type={"password"}
                    onTextChange={(e) => {
                        setErrorMessage(false);
                        setPassword(e.target.value);
                    }}
                /> 
                <p className="errorMsg" id="error-message"> {errorMessage ? "Wrong email or password" : ""}</p>
                <Button text="Login" 
                onMouseClick={loginHandler} 
                />
            </div>
        </div>
    );
};

export default Login;   