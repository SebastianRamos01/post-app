import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='text-white flex justify-center gap-3'>
        <Link to={"/posts"} className='hover:scale-110 p-1 text-xl'>Posts</Link>
        <Link to={"/"}>
            <h1 className='text-[25px] underline hover:scale-110'>Home</h1>
        </Link>
        <Link to={"/about"} className='hover:scale-110 p-1 text-xl'>About</Link>
    </nav>
  )
}
