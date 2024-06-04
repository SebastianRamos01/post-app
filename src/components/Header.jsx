import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='sticky top-0 font-amatic backdrop-blur h-10 px-5 md:px-10 z-20 flex justify-between items-center'>
      <h1 className='text-2xl'>In-Universe</h1>
      <Navbar></Navbar>
    </header>
  )
}
