import { useParams } from "react-router-dom";
import { posts } from "../data/data";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function PostView() {
  const { id } = useParams();
  const post = posts.find((e) => e.id.toString() === id);
  if (!post) {
    return <div>Post not found!</div>;
  }
  return (
    <Background>
        <section className="mx-5 font-sans">
          <div key={post.id} className="flex flex-col items-center my-1">
            <div className="h-[560px] w-full relative overflow-hidden rounded-lg">
              <img
                src={`/images/${post.image}`}
                alt={post.title}
                className="rounded-lg absolute scale-[1.8] top-20"
              />
            </div>
            <div className="bg-black bg-opacity-40 p-3">
              <h3 className="text-xl">{post.title}</h3>
              <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="my-5">{post.body}</p>
              <p>- {post.author}</p>
              <p className="text-gray-500">- {post.createdAt}</p>
            </div>
          </div>
        </section>
        <LatestPosts />
        <Footer></Footer>
    </Background>
  );
}

function LatestPosts() {
  const lastPosts = posts.slice(-5).reverse()

  return(
    <section className="mx-5 font-sans lg:hidden">
      <p>Recintes</p>
      <ul className="flex overflow-hidden flex-row gap-5">
      {lastPosts.map((elem) => {
          return (
            <Card key={elem.id} i={elem.id} img={elem.image} title={elem.title} author={elem.author}/>
          )
        })}
      </ul>
    </section>
  )
}