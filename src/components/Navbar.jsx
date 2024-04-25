import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='text-white flex justify-center gap-3 text-xl mx-[20px]'>
        <Link to={"/"} className='p-1'>Home</Link>
        <Link to={"/posts"} className='hover:scale-110 p-1'>Posts</Link>
        <Link to={"/about"} className='hover:scale-110 p-1'>About</Link>
        <p>Books</p>
    </nav>
  )
}
