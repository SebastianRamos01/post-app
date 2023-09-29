import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Post from './Post'
import data from '../data/post'

export default function List() {
  return (
    <div className='bg-gradient-to-br from-black to-violet-950 pb-3'>
        <Header></Header>
        <div className='text-white font-amatic bg-black bg-opacity-30 w-[95%] md:w-[80%] m-auto'>
            <div className='h-[20vh] flex items-center justify-center'>
                <p className='text-[25px]'>All Posts</p>
            </div>
            <section className='text-white flex flex-col sm:flex-row flex-wrap'>
                {data?.map(post => 
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
            <Footer></Footer>
        </div>
    </div>
  )
}
