import "./style.css";
import React from "react";

const Input = ({placeholder, label, onTextChange,type}) => {
    return (
       <div className= {`flex center half-width half-height input column`}> 
       <label className= {`bold black-color`}>{label}</label>
        <input className= {`orange-color rounded`}
            placeholder={placeholder}
            type= {type}
            onChange = {(e) => onTextChange(e)}
        />
       </div>
    );
}
export default Input;