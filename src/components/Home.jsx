import React from 'react'
import Header from './Header'
import Featured from './Featured'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 py-3'>
      <Header></Header>
      <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] m-auto sm:w-[80%]'>
        <section className='flex flex-col justify-center items-center h-[87vh]'>
          <div className='text-center w-[80%]'>
            <h1 className='text-3xl'>
              The universe We know
            </h1>
            <p className='text-xl'>
              Theres a lot that we dont know of the observable universe.
              This "Blog" explore the wonders of the universe that we know and others that are still unknow.
            </p>
          </div>
          <Link to={"/about"}>
            <div className='bg-violet-500 px-5 rounded m-1 transition ease-in-out hover:scale-110 duration-300'>
              More Info
            </div>
          </Link>
        </section>
        <Featured></Featured>
        <Link to={"/posts"} className='flex w-fit m-auto'>
          <div className='bg-violet-500 px-5 rounded m-1 transition ease-in-out hover:scale-110 duration-300'>
            See More 
          </div>
        </Link>
        <Footer></Footer>
      </div>
    </div>
  )
}
