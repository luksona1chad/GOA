import "./App.css";

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Navbar */}
      <header className="flex items-center justify-between px-12 py-8">
        <div className="flex items-center text-2xl font-bold">
          Fintech<span className="text-yellow-400">.</span>
        </div>
        <nav className="hidden md:flex space-x-10 text-gray-600 text-sm">
          <a href="#" className="hover:text-black">Platform</a>
          <a href="#" className="hover:text-black">Company</a>
          <a href="#" className="hover:text-black">Industries</a>
          <a href="#" className="hover:text-black">Resources</a>
        </nav>
        <div className="space-x-3">
          <button className="px-5 py-2 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-50">
            Sign In
          </button>
          <button className="px-5 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-900">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-12 pt-16 pb-24 md:pb-32">
        <div className="max-w-xl z-10">
          <h1 className="text-[3.5rem] md:text-[4rem] font-extrabold leading-[1.1] mb-6 tracking-tight">
            All banks are <br />
            worried about <br />
            <span className="text-gray-900">fintech ind.</span>
          </h1>
          <p className="text-gray-500 mb-8 text-base leading-relaxed max-w-md">
            We help you get paid any way you want, with the least amount of hassle.
            It’s just one of the reasons we are the most trusted name.
          </p>
          <div className="flex items-center space-x-3 mb-12">
            <input
              type="email"
              placeholder="Business email"
              className="border border-gray-300 rounded-md px-4 py-2 w-64 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md text-sm">
              Get started
            </button>
          </div>

          <div className="flex space-x-10 text-center">
            <div>
              <h3 className="text-2xl font-bold">$22k</h3>
              <p className="text-gray-500 text-sm mt-1">Total Earning</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">$10k</h3>
              <p className="text-gray-500 text-sm mt-1">Withdraw</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">15</h3>
              <p className="text-gray-500 text-sm mt-1">Total Projects</p>
            </div>
          </div>
        </div>

        <div className="relative mt-14 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
          <div className="absolute -right-24 top-0 w-[500px] h-[500px] bg-yellow-300 rounded-full opacity-40 blur-3xl"></div>
          <img
            src="https://via.placeholder.com/450x450"
            alt="Person"
            className="relative z-10 w-[380px] md:w-[420px] rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#fdfdfd] py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 flex items-center justify-center"></div>
            <h3 className="font-semibold text-lg mb-2">
              Improved collection performance
            </h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Optimize your cash flow with faster, smarter payments.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 flex items-center justify-center"></div>
            <h3 className="font-semibold text-lg mb-2">
              Convenient, local payment options
            </h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Accept payments easily in multiple currencies and regions.
            </p>
          </div>

          <div className="p-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-4 flex items-center justify-center"></div>
            <h3 className="font-semibold text-lg mb-2">
              The best price guarantee
            </h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              Enjoy competitive rates and transparent pricing always.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
