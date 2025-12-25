import React from 'react'

export default function Hero(params) {
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <h2>{params.children}</h2>
      <img src="/assets/images/RAZMADZE.png" alt="" />
    </div>
  )
}

