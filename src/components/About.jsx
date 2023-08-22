import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 py-3'>
        <Header></Header>
        <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] m-auto h-[100vh] lg:w-[80%]'>
            <h1>Soy About</h1>
            <Footer></Footer>
        </div>
    </div>
  )
}
