import React, { useState } from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import { posts } from '../data/data'
import Footer from '../components/Footer'

const initialState = {
    postsToShow: posts.slice(0, 4),
    hasMorePosts: true,
  };

export default function Posts() {
    const [state, setState] = useState(initialState);

  const handleLoadMore = () => {
    const newPostsToShow = state.postsToShow.concat(
      posts.slice(state.postsToShow.length, state.postsToShow.length + 4)
    );
    setState({
      postsToShow: newPostsToShow,
      hasMorePosts: newPostsToShow.length < posts.length,
    });
  };
  return (
    <Background>
        <section className='mx-5 md:mx-10 font-sans text-center'>
            <ul className="flex gap-2 md:gap-1 flex-col text-left md:flex-row md:flex-wrap justify-between">
                {state.postsToShow.map((elem) => (
                <Card key={elem.id}
                    author={elem.author}
                    img={elem.image}
                    title={elem.title}
                    i={elem.id} />
                ))}
            </ul>
            {state.hasMorePosts && (
                <button onClick={handleLoadMore}
                  className="bg-violet-700 px-6 py-1 text-sm w-fit rounded transition ease-in-out hover:scale-110 duration-300 my-5">
                  Cargar más
                </button>
            )}
        </section>
        <Footer></Footer>
    </Background>
  )
}
