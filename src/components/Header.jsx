import React from 'react'

export default function Header() {
  return (
    <header className='sticky top-0 font-amatic backdrop-blur'>
        <nav className='text-white flex justify-center gap-2'>
          <h2>Posts</h2>
          <h1 className='text-2xl underline '>Post-App</h1>
          <h2>About</h2>
        </nav>
    </header>
  )
}
