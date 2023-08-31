import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 py-3'>
        <Header></Header>
        <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] m-auto h-[100vh] lg:w-[80%]'>
            <div className='text-center'>
              <p>
                El proyecto nacio de la idea 
              </p>
              <p>
                Importante: No considerar ningun post como verdad absoluta, este blog tiene el proposito de informar y fomentar la curiosidad del lector sobre el universo del que somos parte.
              </p>
              <p>
                En caso de tener alguna duda, sugerencia, cuestion o interes en participar del proyecto ponerse en contacto.
              </p>
            </div>
            <Footer></Footer>
        </div>
    </div>
  )
}
