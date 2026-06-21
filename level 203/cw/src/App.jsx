import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white">
        <div className="grid md:grid-cols-2">

          <div className="flex flex-col justify-center px-8 md:px-16 py-12">

            <div className="flex items-center gap-3 mb-16">
              <div className="w-5 h-5 border-2 border-pink-300 rounded-full"></div>
              <div className="text-xs font-semibold text-gray-800 leading-tight">
                BASE
                <br />
                APPAREL
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-light  text-pink-200">
              WE'RE
            </h2>

            <h1 className="text-5xl md:text-6xl font-bold  text-gray-900 leading-tight mb-8">
              COMING
              <br />
              SOON
            </h1>

            <p className="text-gray-400 max-w-md  mb-10">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>

            <form className="relative max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-4 pl-6 pr-24 border border-pink-100 rounded-full outline-none focus:ring-2 focus:ring-pink-200"
              />

              <button
                type="submit"
                className="absolute top-0 right-0 h-full px-8 rounded-full text-xl shadow-md hover:opacity-90 transition"
              >
                →
              </button>
            </form>
          </div>

          <div className="h-[400px] md:h-auto">
            <img
              src="./public/assets/img/image.png"
              alt="Fashion Model"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;