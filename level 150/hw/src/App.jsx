import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter(counter + 1);
  }
  function handleDecrease() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;