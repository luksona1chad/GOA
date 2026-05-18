import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    async function name(params) {
      const lobio = await fetch("https://jsonplaceholder.typicode.com/posts/1")
      const responde = await lobio.json()
      console.log(responde)
    }
    name()
  }, [])
  return (
    <div>App</div>
  )
}
