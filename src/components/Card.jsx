import Cookies from 'js-cookie'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Card() {
  const dark = useSelector(state => state.dark.dark)
  // const dark = JSON.parse(Cookies.get("dark"))
  const nav = useNavigate()
  const handleClick = () => {
    // nav(`/detail:${id}`)
    nav("/detail")
  }
  return (
    <main onClick={handleClick} className={`${dark ? 'bg-[#374151]': 'bg-white'} transition-all ease-linear duration-300 p-5 rounded cursor-pointer`}>
        <div className='p-2 -mt-10 my-5 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center'>
            <h1 className='text-white'>Sc.</h1>
        </div>
        <div className='flex gap-3'>
            <p>5h ago.</p>
            <p>Full Time</p>
        </div>
        <h1 className={`${dark && "text-white"} transition-all ease-linear duration-300 my-2 `}>Senior Software Engineer</h1>
        <h5 className='font-semibold'>Scoot</h5>
        <h4 className='font-semibold text-primary'>United Kingdom</h4>
    </main>
  )
}
