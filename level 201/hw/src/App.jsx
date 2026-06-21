import { useState } from "react";

export default function App() {
  const [text, setText] = useState("გამარჯობა!");

  const handleClick = () => {
    setText("ტექსტი შეიცვალა!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">{text}</h1>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        ტექსტის შეცვლა
      </button>
    </div>
  );
}