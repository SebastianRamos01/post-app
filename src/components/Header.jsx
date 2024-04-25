import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='sticky top-0 font-amatic backdrop-blur h-10 mx-[20px] lg:mx-[80px] flex'>
      <h1 className='text-2xl underline'>In-Universe</h1>
        <Navbar></Navbar>
    </header>
  )
}
