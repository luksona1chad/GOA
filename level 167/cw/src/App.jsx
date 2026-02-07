import React from 'react'

export default function App() {
  function App() {
    const fotrtcast = [
      {
        week_guy: "THU",
        date: "jan 29",
        img: "",
        alt: "cloudy",
        temp: "Low 13",
        temp1: "POP 60%"
      }
    ]
  };
  return (
    <div>
      <h1 className='text-green-700 text-[20px]'>Weather Forecast for: <br />Abbotsfodoijcis Airport</h1>
      <div className='bg-gray-300'><p>Updated: Jan29, 2026 at 7:02 AM</p>
        <div className=''>
          {fortcast.map((item, index) => (
          <div key={index}>
            <h2>{item.week_day}</h2>
            <h3>{item.date}</h3>
          </div>
          )}
        </div>

        <button className='bg-green-500 border '>adas</button>
        <br />
        <button className='bg-green-500 border '>adas</button>
      </div>
    </div>
  )
}
