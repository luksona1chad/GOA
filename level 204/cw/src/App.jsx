import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    age: 0,
  });
  console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  returh (<>);
}

export default App;