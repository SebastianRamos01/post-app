import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({img, author, title, i}) {
  return (
    <article key={i} className='font-sans relative h-[560px] rounded-lg min-w-[280px] max-w-[385]'>
        <div className='h-full w-full relative overflow-hidden rounded-lg'>
            <img src={`/images/${img}`} alt={title} className='absolute scale-[1.8] top-20'/>
        </div>
        <div className='absolute z-10 top-0 bg-black bg-opacity-40 h-full flex flex-col justify-between p-2'>
            <p>{author}</p>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold'>{title}</p>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to={`/posts/${i}`} className='bg-violet-700 px-6 py-1 my-2 rounded w-fit'>Leer Mas</Link>
            </div>
        </div>
    </article>
  )
}