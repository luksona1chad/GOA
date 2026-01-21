import React from 'react'
import { useState } from "react"
export default function GetApi() {
    const [data, setdata] = useState()
    async function handleGetApi() {
        const URI = "https://fakestoreapi.com/products"
        fetch(URI)
            .then((res) => res.json())
            .then((data) => setdata(data))
    }
    return (
        <div className='space-y-2'>
            <div className='bg-red-500 w-full h-screen'>
                {JSON.stringify(data)}
            </div>
            <button onClick={handleGetApi} className='bg-green-700 text-orange-300 rounded-[10px]'>Click me!</button>
        </div>
    )
}
