import "./App.css";
import { useState } from "react";

function App() {
  const [paragpahView, setParagpahView] = useState(true);

  function hanldeParagpahViewTrue() {
    setParagpahView(true);// ფუნქცია აყენებს state-ს True-ზე
  }

  function hanldeParagpahViewFalse() {
    setParagpahView(false); // ფუნქცია აყენებს state-ს false-ზე 
  }

  return (
    <>
      <button onClick={hanldeParagpahViewTrue}>True</button>
      <button onClick={hanldeParagpahViewFalse}>False</button>

      <div>
        {paragpahView ? <p>this is True peace of paragraph</p> : null}
      </div>
    </>
  );
}

export default App;