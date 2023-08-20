import React from 'react'
import Header from './Header'
import Featured from './Featured'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 py-3'>
      <Header></Header>
      <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] m-auto lg:w-[80%]'>
        <section className='flex flex-col justify-center items-center h-[87vh] '>
          <h1 className='text-3xl'>
            Random Little Title
          </h1>
          <p className='text-xl'>
            Random Text for the description of the App
          </p>
          <div className='bg-violet-500 px-5 rounded m-1'>
            More Info
          </div>
        </section>
        <Featured></Featured>
        <Footer></Footer>
      </div>
    </div>
  )
}
