import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <h1 className="text-blue-500 text-2xl text-center mt-4">
          My First Vite + Tailwind App
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts/*" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;