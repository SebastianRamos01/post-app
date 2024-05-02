import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='sticky top-0 font-amatic backdrop-blur h-10 z-10 flex justify-between'>
      <h1 className='text-2xl underline mx-[20px] lg:mx-[40px]'>In-Universe</h1>
      <Navbar></Navbar>
    </header>
  )
}
