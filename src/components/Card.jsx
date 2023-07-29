import React from 'react'

export default function Card() {
  return (
    <main className='p-5 rounded bg-white'>
        <div className='p-2 -mt-10 my-5 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center'>
            <h1 className='text-white'>Sc.</h1>
        </div>
        <div className='flex gap-3'>
            <p>5h ago.</p>
            <p>Full Time</p>
        </div>
        <h1 className='my-2'>Senior Software Engineer</h1>
        <h5 className='font-semibold'>Scoot</h5>
        <h4 className='font-semibold text-primary'>United Kingdom</h4>
    </main>
  )
}
