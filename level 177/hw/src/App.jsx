import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex justify-between p-4">
        <h1 className="text-xl font-bold">SAMSUNG</h1>
        <div className="space-x-4">
          <span>Phones</span>
          <span>TV</span>
          <span>Support</span>
        </div>
      </div>

      <div className="text-center mt-20">
        <h2 className="text-4xl font-bold">Galaxy S Ultra</h2>
        <p className="mt-4">Next level innovation</p>
        <button className="mt-6 bg-white text-black px-6 py-2 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}