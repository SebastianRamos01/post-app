import { useParams } from "react-router-dom";
import { posts } from "../data/data";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function PostView() {
  const { id } = useParams();
  const post = posts.find((e) => e.id.toString() === id);
  if (!post) {
    return <div>Post not found!</div>;
  }
  return (
    <Background>
        <section className="mx-5 md:mx-10 font-sans">
          <div key={post.id} className="flex flex-col my-2 md:flex-row-reverse gap-5">
            <div className="h-[520px] shrink-0 md:max-w-[320px] w-full relative overflow-hidden rounded-lg">
              <img
                src={`/images/${post.image}`}
                alt={post.title}
                className="rounded-lg absolute scale-[1.8] bottom-20"
              />
            </div>
            <div className="bg-black bg-opacity-40 p-3 text-sm h-fit">
              <h3 className="text-xl">{post.title}</h3>
              <p className=''>{post.header}</p>
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
  const featureds = posts.filter((post) => post.featured === true).slice(0, 5);

  return(
    <section className="mx-5 md:mx-10 font-sans overflow-hidden">
      <p className="my-2">Explorar mas Posts</p>
      <motion.ul 
        drag='x'
        dragConstraints={{right: 0, left: -1100}} 
        className="flex flex-row gap-5 lg:hidden">
        {featureds.map((elem) => {
            return (
              <Card key={elem.id} i={elem.id} img={elem.image} title={elem.title} head={elem.header} author={elem.author}/>
            )
          })}
      </motion.ul>
      <ul className="lg:flex flex-wrap justify-between gap-2 hidden">
        {featureds.map((elem) => {
            return (
              <Card key={elem.id} i={elem.id} img={elem.image} title={elem.title} head={elem.header} author={elem.author}/>
            )
          })}
      </ul>
    </section>
  )
}