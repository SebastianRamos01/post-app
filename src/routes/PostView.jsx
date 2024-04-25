import { useParams } from "react-router-dom";
import { posts } from "../data/data";
import Background from "../components/Background";
import CardBg from "../components/CardBg";
import Header from "../components/Header";
import Post from "../components/Post";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function PostView() {
  const lastPosts = posts.slice(-2).reverse();
  const { id } = useParams();
  const post = posts.find((e) => e.id.toString() === id);
  if (!post) {
    return <div>Post not found!</div>;
  }
  return (
    <Background>
      <Header></Header>
      <div>
        <h3>Post number {id}</h3>
      </div>
      <CardBg>
        <section className="mx-5">
          <div key={post.id} className="flex flex-col items-center my-1">
            <div className="">
              <img
                src={`/images/${post.image}`}
                alt={post.title}
                className="rounded w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-xl">{post.title}</h3>
              <p className="font-sans font-thin">{post.body}</p>
              <p>- {post.author}</p>
              <p className="text-gray-500">- publicado {post.createdAt}</p>
            </div>
          </div>
        </section>
        <section className="mx-[20px] md:mx-[40px] my-1 flex flex-col items-center">
            <div className="w-full">
                <span className="text-xl">
                    Recientes
                </span>
            </div>
          <ul className="flex flex-wrap justify-center gap-5">
            {lastPosts.map((post) => (
              <Post
                key={post.id}
                route={post.id}
                source={post.image}
                body={post.body}
                title={post.title}
                author={post.author}
                created={post.createdAt}
              ></Post>
            ))}
          </ul>
          <Button action={"Ver Mas"} route={"posts"} />
        </section>
        <Footer></Footer>
      </CardBg>
    </Background>
  );
}
