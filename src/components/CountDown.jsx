import React, { useEffect, useState } from 'react'

export default function CountDown() {
    const [seconds, setSeconds] = useState(10)
    useEffect(() => {
       const interval = setInterval(() => {
        setSeconds(prevsec => prevsec -1)
       }, 1000) 
       seconds === 0 && clearInterval(interval)
       return () => clearInterval(interval)
    },[seconds])

  return (
    <div className='inline-block text-primary font-semibold'>
        {seconds}
    </div>
  )
}
