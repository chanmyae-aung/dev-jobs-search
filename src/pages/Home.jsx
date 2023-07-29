import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className='bg-slate-100 h-screen'>
        <Navbar/>
        <div className='px-20 lg:px-40 mt-20'>
          <Card />
        </div>
    </div>
  )
}
