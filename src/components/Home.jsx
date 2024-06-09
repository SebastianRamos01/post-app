import Background from "./Background";
import Footer from "./Footer";
import { posts } from "../data/data";
import Card from "./Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Background>
      <Featured />
      <LatestPosts />
      <Footer></Footer>
    </Background>
  );
}

function Featured() {
  const featureds = posts.filter((post) => post.featured === true).slice(0, 4);
  const lastPosts = posts.slice(-5).reverse();

  return (
    <section className="mx-5 md:mx-10 lg:flex gap-1">
      <ul className="flex flex-col gap-2 md:flex-row flex-wrap md:justify-between">
        {featureds.map((elem) => {
          return (
            <Card key={elem.id} i={elem.id} img={elem.image} title={elem.title} head={elem.header} author={elem.author}/>
          )
        })}
      </ul>
      <aside className="hidden lg:flex flex-col font-sans">
        <p className="text-sm m-1">
          Ultimos Posts
        </p>
        <ul className="flex flex-col gap-5">
          {lastPosts.map((elem) => {
            return(
              <article key={elem.id} className="bg-black bg-opacity-40 rounded-lg text-sm w-[310px] p-3 flex flex-col">
                <p className="text-base">{elem.title}</p>
                <p>{elem.header}</p>
                <Link to={`/posts/${elem.id}`} className='bg-violet-700 px-6 py-1 my-2 rounded w-fit'>Leer Mas</Link>
              </article>
            )
          })}
        </ul>
      </aside>
    </section>
  )
}

function LatestPosts() {
  const lastPosts = posts.slice(-5).reverse()

  return(
    <section className="mx-5 md:mx-10 my-5 font-sans lg:hidden overflow-hidden">
      <p>Recintes</p>
      <motion.ul 
        drag='x'
        dragConstraints={{right: 0, left: -1100}} 
        className="flex  gap-5">
        {lastPosts.map((elem) => {
            return (
              <Card key={elem.id} i={elem.id} img={elem.image} title={elem.title} head={elem.header} author={elem.author}/>
            )
          })}
      </motion.ul>
    </section>
  )
}