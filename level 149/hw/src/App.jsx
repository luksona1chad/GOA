import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-sans text-gray-800">

        <header className="flex items-center justify-between p-6 shadow-md bg-white">
          <div className="text-xl font-bold flex items-center gap-2">
            <img src="/logo.png" alt="Last Chance Logo" className="w-8 h-8" />
            LAST CHANCE
          </div>
          <nav className="flex items-center gap-6">
            <a href="#login" className="text-sm color- ">Log In</a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Donate Now</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Take Action</button>
            <button className="text-sm">Menu</button>
          </nav>
        </header>
        <section
          className="relative w-full h-[500px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        > 
          <div className="bg-white bg-opacity-80 p-10 ml-10 rounded-lg max-w-xl">
            <h1 className="text-5xl font-bold leading-tight">
              PROTECT <br /> OUR <span className="text-orange-500">WILDLIFE</span>
            </h1>
            <p className="mt-4 text-sm text-gray-700">
              I'm a paragraph. Click here to add your own text and edit me. It's easy.
            </p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded">GET INVOLVED</button>
          </div>
        </section>

        <section className="grid grid-cols-4 text-center py-16 text-3xl font-bold">
          <div>
            <p className="text-orange-500">40K</p>
            <p className="text-sm mt-2 font-normal">Endangered Species</p>
          </div>
          <div>
            <p className="text-orange-500">800</p>
            <p className="text-sm mt-2 font-normal">Volunteers</p>
          </div>
          <div>
            <p className="text-orange-500">140</p>
            <p className="text-sm mt-2 font-normal">Conservation Programs</p>
          </div>
          <div>
            <p className="text-orange-500">1</p>
            <p className="text-sm mt-2 font-normal">Earth for Us to Protect</p>
          </div>
        </section>

        <section className="grid grid-cols-2">
          <div className="bg-black text-white p-16">
            <h2 className="text-3xl font-bold mb-6">About Last Chance</h2>
            <p className="text-sm mb-6">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded">Learn More</button>
          </div>
          <div className="relative">
            <img src="/about.jpg" alt="Animal" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="grid grid-cols-2">
          <div className="relative">
            <img src="/project.jpg" alt="Project" className="w-full h-full object-cover" />
          </div>
          <div className="bg-blue-200 p-16">
            <h2 className="text-3xl font-bold mb-6">Upcoming Projects to Fund</h2>
            <p className="text-sm mb-6">I'm a paragraph. Click here to add your own text.</p>
            <button className="bg-black text-white px-4 py-2 rounded">Support Us</button>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
