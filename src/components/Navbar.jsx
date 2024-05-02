import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
      }

  return (
    <nav className='text-white flex justify-center gap-3 text-xl'>
      <div className='w-5 h-4 flex flex-col justify-between my-3 lg:hidden mx-5' onClick={toggleDropdown}>
        <div className='h-[2px] bg-white w-full'></div>
        <div className='h-[2px] bg-white w-full'></div>
        <div className='h-[2px] bg-white w-full'></div>
      </div>
      {isOpen && (
        <div className='h-screen bg-red-400 w-screen absolute top-0 left-0 -z-10 bg-gradient-to-br from-black to-violet-950'>
          <div className='flex flex-col items-center text-2xl my-32 gap-2'>
            <Link to={"/"} className='p-1'>Home</Link>
            <Link to={"/posts"} className='hover:scale-110 p-1'>Posts</Link>
            <Link to={"/about"} className='hover:scale-110 p-1'>About</Link>
            <Link to={"/books"} className='hover:scale-110 p-1'>Books</Link>
          </div>
        </div>
      )}
      <div className='hidden lg:flex gap-2 mx-5 '>
        <Link to={"/"} className='p-1'>Home</Link>
        <Link to={"/posts"} className='hover:scale-110 p-1'>Posts</Link>
        <Link to={"/about"} className='hover:scale-110 p-1'>About</Link>
        <Link to={"/books"} className='hover:scale-110 p-1'>Books</Link>
      </div>
    </nav>
  )
}
