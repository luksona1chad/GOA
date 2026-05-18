import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const ORIGIN = "http://localhost:3000";

function App() {
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch(`${ORIGIN}/auth/1`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;