import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Post from './Post'

export default function List() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 py-3'>
        <Header></Header>
        <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] m-auto lg:w-[80%]'>
            <div className='h-[20vh] flex items-center justify-center'>
                <p className='text-2xl'>All Posts</p>
            </div>
            <section className='text-white flex flex-col lg:flex-row flex-wrap'>
            <Post
                source="/images/space-img-3.jpg"
                title='Light'
                body='La luz visible es la parte del espectro electromagnético que podemos ver.
                    El espectro electromagnético incluye ondas de radio, microondas, infrarrojos, visible, ultravioleta, rayos X y rayos gamma.
                    La luz visible es la parte del espectro electromagnético que tiene una longitud de onda entre 380 y 700 nanómetros.'
                author='Somebody'
            ></Post>
            <Post
                source="/images/space-img-2.jpg"
                title='Stars'
                body='La luz visible es la parte del espectro electromagnético que podemos ver.
                    El espectro electromagnético incluye ondas de radio, microondas, infrarrojos, visible, ultravioleta, rayos X y rayos gamma.
                    La luz visible es la parte del espectro electromagnético que tiene una longitud de onda entre 380 y 700 nanómetros.'
                author='Somebody'
            ></Post>
            </section>
            <Footer></Footer>
        </div>
    </div>
  )
}
