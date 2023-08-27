import React from 'react'

export default function Post({
    source,
    title,
    body,
    created,
    id,
    author
}) {
  return (
    <div key={id} className='flex flex-col items-center my-3 m-auto w-[90%] max-w-[280px]'>
        <img src={`/images/${source}`} alt={title} className='w-[90%] rounded'/>
        <h3 className='text-2xl'>
          {title}
        </h3>
        <p className='text-center'>
          {body}
        </p>
        <p>
          - {author}
        </p>
        <p className='text-gray-500'>
          - publicado {created}
        </p>
    </div>
  )
}
