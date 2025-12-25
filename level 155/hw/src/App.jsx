import { useState } from "react";
import "./Button.css";


function Button({ children, color }) {
  const [text, setText] = useState(children);

  const handleClick = () => {
    console.log("Button clicked!");
    setText("Clicked!");  
  };

  return (
    <button
      className="custom-button"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
