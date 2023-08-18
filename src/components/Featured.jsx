import React from 'react'
import Post from './Post'

export default function Featured() {
  return (
    <section className='text-white flex flex-col lg:flex-row flex-wrap'>
        <Post
          source="/images/space-img-5.jpg"
          title='universe we know'
          body='El universo está en constante cambio y evolución.
            Las estrellas nacen y mueren, los planetas se forman y se destruyen,
            las galaxias se fusionan y se separan. El futuro del universo es incierto,
            pero es probable que continúe expandiéndose y evolucionando durante muchos miles de millones de años.'
          author='Bard'
        ></Post>
        <Post
          source="/images/space-img-4.jpg"
          title='Black Holes'
          body='Los agujeros negros son objetos increíblemente poderosos y misteriosos.
            Nos esperan muchos años de investigación para entender mejor su naturaleza y su papel en el universo.'
          author='Somebody'
        ></Post>
        <Post
          source="/images/space-img-3.jpg"
          title='Light'
          body='La luz visible es la parte del espectro electromagnético que podemos ver.
            El espectro electromagnético incluye ondas de radio, microondas, infrarrojos, visible, ultravioleta, rayos X y rayos gamma.
            La luz visible es la parte del espectro electromagnético que tiene una longitud de onda entre 380 y 700 nanómetros.'
          author='Somebody'
        ></Post>
    </section>
  )
}
