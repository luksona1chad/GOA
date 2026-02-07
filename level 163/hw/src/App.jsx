import React from "react";

export default function App() {
  return (
    <div className="mflex text-center justify-center w-full h-screen">
      <div className="relative w-[420px] h-[420px] rounded-full bg-[#f6e6d8] shadow-lg flex flex-col items-center justify-center">

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-52 h-52 rounded-full bg-[#ff7f73] flex items-center justify-center">
            <h1 className="text-[96px] text-[#1f1f1f]">
              404
            </h1>
          </div>
        </div>

        <div className="absolute bottom-10 px-10 text-center">
          <h2 className="text-lg font-semibold text-[#1f1f1f] mb-2">
            Looks like you are lost.
          </h2>

          <p className="text-sm text-[#3a3a3a] mb-6">
            Oops! The page you are looking for does not exist.
          </p>

          <button className="border border-blue-200 px-6 py-2 hover:bg-[#1f1f1f] hover:text-white transition">
            BACK TO HOME
          </button>
        </div>

      </div>
    </div>
  );
}
