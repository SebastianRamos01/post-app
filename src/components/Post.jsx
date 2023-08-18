import React from 'react'

export default function Post({
    source,
    title,
    body,
    author
}) {
  return (
    <div className='flex flex-col items-center m-auto w-[90%] md:w-[40%] lg:w-[30%]'>
        <img src={source} alt="space-img-5.jpg" className='w-[90%]'/>
        <h3 className='text-2xl'>
          {title}
        </h3>
        <p className='text-center'>
          {body}
        </p>
        <p>
           - {author}
        </p>
    </div>
  )
}
