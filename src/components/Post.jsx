import React from 'react'

export default function Post({
    source,
    title,
    body,
    author
}) {
  return (
    <div className='flex flex-col items-center my-3 m-auto w-[90%] md:w-[40%] lg:w-[30%]'>
        <img src={source} alt={title} className='w-[90%] rounded'/>
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
