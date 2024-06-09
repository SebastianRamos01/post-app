import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({img, author, title, head,  i}) {
  return (
    <article key={i} className='font-sans relative h-[620px] min-w-[280px] max-w-[385px] md:h-[480px] md:w-[310px]'>
        <div className='h-full w-full relative overflow-hidden rounded-lg'>
            <img src={`/images/${img}`} alt={title} className='absolute scale-[1.8] top-20'/>
        </div>
        <div className='absolute z-10 top-0 bg-black w-full bg-opacity-40 h-full flex flex-col justify-between p-2 rounded-lg'>
            <p className='text-sm'>{author}</p>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold'>{title}</p>
                <p className='text-sm'>{head}</p>
                <Link to={`/posts/${i}`} className='bg-violet-700 px-6 py-1 text-sm my-2 rounded w-fit'>Leer Mas</Link>
            </div>
        </div>
    </article>
  )
}
