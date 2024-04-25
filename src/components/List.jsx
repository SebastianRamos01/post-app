import Header from "./Header";
import Footer from "./Footer";
import Post from "./Post";
import { posts } from "../data/data";
import Background from "./Background";
import CardBg from "./CardBg";
import { useState } from "react";

const initialState = {
  postsToShow: posts.slice(0, 4),
  hasMorePosts: true,
};

export default function List() {
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
      <Header></Header>
      <div className="h-[20vh] flex items-center justify-center">
        <p className="text-[25px]">All Posts</p>
      </div>
      <CardBg>
        <section className="flex items-center flex-col">
          <ul className="flex flex-wrap justify-center mx-[10px] md:mx-[40px] gap-5">
            {state.postsToShow.map((product) => (
              <Post
                key={product.id}
                route={product.id}
                source={product.image}
                body={product.body}
                title={product.title}
                author={product.author}
                created={product.createdAt}
              ></Post>
            ))}
          </ul>
          {state.hasMorePosts && (
            <button onClick={handleLoadMore}
              className="bg-violet-500 px-5 w-fit rounded transition ease-in-out hover:scale-110 duration-300 my-2">
                Cargar más posts</button>
          )}
        </section>
        <Footer></Footer>
      </CardBg>
    </Background>
  );
}
