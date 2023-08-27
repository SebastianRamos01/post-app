import React from 'react'
import Post from './Post'
import data from '../data/post'

export default function Featured() {

  const featureds = data.filter(post => 
    post.featured === true)
  return (
    <section className='text-white flex flex-col sm:flex-row flex-wrap'>
        {featureds?.map( post => 
          <Post
            key={post.id}
            source={post.image}
            title={post.title}
            body={post.body}
            author={post.author}
            created={post.createdAt}
          ></Post>
          )}
    </section>
  )
}
