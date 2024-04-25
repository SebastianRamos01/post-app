import Post from "./Post"
import { posts } from "../data/data"
import Button from "./Button"

export default function Recent() {

    const lastPosts = posts.slice(-5).reverse() 

  return (
    <section className="flex items-center flex-col">
        <ul className="flex flex-wrap justify-center mx-[20px] md:mx-[40px] gap-5">
            {
                lastPosts.map(post => (
                    <Post
                        key={post.id}
                        route={post.id}
                        source={post.image}
                        body={post.body}
                        title={post.title}
                        author={post.author}
                        created={post.createdAt}
                    ></Post>
                ))
            }
        </ul>
        <Button
            action={"Ver Mas"}
            route={"posts"}
        ></Button>
    </section>
  )
}
