import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center h-[30vh]'>
        <h2 className='text-xl'>
          Web Developing / Web Design
        </h2>
        <p className='text-lg flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-violet-500'></div> Ramos Sebastian - 2023
        </p>
        <div className='text-xl'>
            Contact:
        </div>
        <div className='flex gap-3 text-lg'>
          <div>
            Icon
          </div>
          <div>
            Icon
          </div>
          <div>
            Icon
          </div>
        </div>
    </footer>
  )
}
