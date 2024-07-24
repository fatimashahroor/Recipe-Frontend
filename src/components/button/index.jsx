import React from "react";
import "./style.css";

const Button = ({ text, backgroundColor = "softorange", textColor = "white", onMouseClick,}) => {
    return (
        <button
           onClick={onMouseClick}
           className= {`flex center rounded clickable ${backgroundColor} ${textColor} half-width bold button`}
        >
           {text}
        </button>
    );
};
export default Button;