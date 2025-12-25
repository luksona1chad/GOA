import React from 'react'
import "./components/Button.css"
function Button({ children, color }) {
  const [text, setText] = useState(children);

  const handleClick = () => {
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