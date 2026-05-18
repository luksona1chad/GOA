import React from 'react'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-[10px]'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-[5px]'>
          <h1 className='text-green-700'>L O M E B I</h1>
          <h1 className='text-green-700'>daviti ari lomi</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquid, ratione vitae et, provident <br /> nobis laborum dolorum quidem, consectetur commodi tempora.</p>
          <h1 className='text-green-700'>kobaxidze lomi</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aliquid, ratione vitae et, provident <br /> nobis laborum dolorum quidem, consectetur commodi tempora.</p>
        </div>
        <div className='w-[150px]'>
          <img src="/assets/img/grdzelo.png" alt="" />
          <img src="/assets/img/grdzelo.png" alt="" />
        </div>
      </div>
      <button className='text-green-800 rounded-[100px] border-[0.50px] p-[3px] bg-gray-100'> Load More </button>
      <div className='flex bg-gray-700 p-[10px]  gap-[8px]'>
        <img src="/assets/img/grdzelo.png" alt="" />
        <img src="/assets/img/grdzelo.png" alt="" />
        <img src="/assets/img/grdzelo.png" alt="" />
        <img src="/assets/img/grdzelo.png" alt="" />
      </div>
      
      <div className='flex gap-[10px]'>
        <img src="/assets/img/grdzelo.png" alt="" />
        <div>

          <h1 className='text-green-700'>Who Are We?</h1>
          <p className='text-gray-600'>We Are Aliens And We Want to Kill You❤️</p>
          <h1 className='text-green-700'>Who Are We?</h1>
          <p className='text-gray-600'>We Are Aliens And We Want to Kill You❤️</p>

        </div>
      </div>
    </div>
  )
}
