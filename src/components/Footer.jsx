import React from 'react'
import igLogo from '../../src/assets/instagram.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center h-[40vh]'>
        <h2 className='text-xl'>
          Web Developing / Web Design
        </h2>
        <div className='text-lg flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-violet-500'></div>
            Ramos Sebastian 
          <div className='w-2 h-2 rounded-full bg-violet-500'></div>
            2023
        </div>
        <div className='text-xl'>
            Contact
        </div>
        <div className='flex gap-3'>
          <Link>
            <img src={igLogo} alt="instagramLogo" className='w-5'/>
          </Link>
        </div>
    </footer>
  )
}
