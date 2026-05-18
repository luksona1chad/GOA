import React from 'react'
import { Routes, Route } from 'react-router'
import Home from "./pages/Home.jsx" 
export default function App() {
  return (
    <div>
      <Routes>
        <Route path ='/home' element = {<Home></Home>}>
          
        </Route>
      </Routes>
    </div>
  )
}
