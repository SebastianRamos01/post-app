import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 pb-3'>
        <Header></Header>
        <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] m-auto lg:w-[80%]'>
            <div className='text-center w-[80%] m-auto my-10'>
              <h3 className='text-[25px] my-6'>
                Sobre el Proyecto
              </h3>
              <p>
                Como seres humanos, nos sentimos atraidos por el misterio del universo. Queremos saber de donde venimos, como funciona el universo y si hay otros seres vivos en el.
              </p>
              <p>
                Desde lo más pequeño a lo más grande, el Universo es todo lo que existe
                desde el mundo invisible de las partículas que constituyen nuestros
                cuerpos hasta las grandes galaxias formadas por millones y millones
                de estrellas.
                Todo lo que es, lo que ha sido y lo que será. Eso es el Universo.
              </p>
              <p>
                Somos el medio para que el Cosmos se conozca a sí mismo. -Carl Sagan
              </p>
              <p>
              En algún lugar, algo increíble está esperando a ser descubierto. -Carl Sagan
              </p>
              <p>
                Este Blog ofrece una vista a la belleza y complejidad del vasto cosmos que nos rodea.
              </p>
              <p>
                Mira a las estrellas y no a tus pies. Intenta dar sentido a lo que ves y pregúntate qué hace que el universo exista. Sé curioso. -Stephen Hawking
              </p>
              <img src="/images/space.jpeg" alt="" className='w-[150px] m-auto mt-2'/>
              <h3 className='underline mt-5'>
                Importante:
              </h3>
              <p>
                El universo sigue en constante evolucion y estudio por ende NO considerar ningun post como verdad absoluta, este blog tiene el proposito de informar y fomentar la curiosidad del lector sobre el universo del que somos parte. <br />
                Esta aplicacion se encuentra aun en desarrollo, en caso de tener alguna duda, sugerencia, cuestion o interes en participar del proyecto ponerse en contacto.
              </p>
            </div>
            <Footer></Footer>
        </div>
    </div>
  )
}
