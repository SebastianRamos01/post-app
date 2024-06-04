import Background from "./Background";
import Footer from "./Footer";
import { posts } from "../data/data";
import Card from "./Card";

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
  const featureds = posts.filter((post) => post.featured === true).slice(0, 3);

  return (
    <section>
      <ul className="mx-5 flex flex-col gap-5">
        {featureds.map((elem) => {
          return (
            <Card key={elem.id} i={elem.id} img={elem.image} title={elem.title} author={elem.author}/>
          )
        })}
      </ul>
    </section>
  )
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