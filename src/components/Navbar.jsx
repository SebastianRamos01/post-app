import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='text-white flex justify-center gap-3'>
        <Link to={"/posts"} className='hover:scale-110'>Posts</Link>
        <Link to={"/"}>
            <h1 className='text-2xl underline'>Home</h1>
        </Link>
        <Link to={"/about"}>About</Link>
    </nav>
  )
}
