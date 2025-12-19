import React from 'react'
import { useState } from 'react'
function App() {
  const [counter, setCount] = useState(0);

  function handleIncrease() {
    setCounter(counter + 1);
  }

  return(
  <div>
    <div>{counter}</div>
    <button onClick={handleIncrease}>Increase</button>
  </div>
  );
}

export default App;