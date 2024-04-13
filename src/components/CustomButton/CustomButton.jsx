import React from "react";
import './CustomButton.css';

const CustomButton = ({text}) => {
  return (
    <button className="btn-add">
        {text}
    </button>
  );
};

export default CustomButton;
