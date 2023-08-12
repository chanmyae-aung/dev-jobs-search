import React from 'react'
import Button from './Button'

export default function ErrorPage() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-center'>
        <img className='w-32' src="https://img.icons8.com/?size=512&id=YOhEyfgatTgi&format=png" alt="" />
        <div className='w-full flex flex-col gap-3 items-center'>
            <h1>Something went wrong!</h1>
            <p>The page you will looking for doesn't exist.</p>
            <Button text={"Go Back"} className={`bg-blue-500 px-5 w-fit rounded text-white`}/>
        </div>
    </div>
  )
}
