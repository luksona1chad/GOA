import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    const GetApi = async( => {
      const link = "https://jsonplaceholder.typicode.com/todos/1"
      const User = await fetch(link)
      const lomi = await User.json()
    })
    GetApi()
  }, []);
return (
  <div></div>
)
}
