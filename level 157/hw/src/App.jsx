import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          WeightFate
        </div>

        <nav className="hidden lg:flex gap-6 text-sm text-gray-600">
          <a href="#">Procedures</a>
          <a href="#">Surgeons</a>
          <a href="#">Reviews</a>
          <a href="#">About</a>
          <a href="#">Cost</a>
          <a href="#">Contact</a>
        </nav>

        <button className="px-4 py-2 border rounded-full text-sm">
          (123) 123-123-111
        </button>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 py-20 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get Your Desired <br /> Weight Hassle- <br /> Free!
          </h1>

          <p className="mt-6 text-gray-600">
            Renew Bariatrics provides affordable Weight Loss <br /> Surgery in Mexico, helping people from around the <br /> world conquer their obesity.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg">
              GET FREE CONSULTATION
            </button>

          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/img/Girl.png"
            alt=""
            className="w-72"
          />
        </div>
      </section>

      <section className="bg-green-500 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 text-center">
          <div>
            <p className="text-3xl font-bold">7000 +</p>
            <p className="text-sm">Success Stories and Cases</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50 +</p>
            <p className="text-sm">YYears of Combined Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5 star</p>
            <p className="text-sm">Star Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}
