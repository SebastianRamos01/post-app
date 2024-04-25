import { posts } from "../data/data";
import Button from "./Button";

export default function Featured() {
  const featureds = posts.filter((post) => post.featured === true).slice(0, 2);
  return (
    <section className="flex flex-col items-center">
      <div>
        <p className="text-2xl">Destacados</p>
      </div>
      <ul className="flex flex-col items-center mx-[40px] lg:flex-row lg:gap-5">
        {featureds?.map((post) => (
          <div key={post.id} className="flex flex-col items-center lg:w-[50%] lg:flex-row">
            <div className="w-full h-full">
              <img
                src={`/images/${post.image}`}
                alt={post.title}
                className="rounded"
              />
            </div>
            <div className="w-full mx-1">
              <h3 className="text-xl">{post.title}</h3>
              <p className="">{post.body}</p>
              <p>- {post.author}</p>
              <p className="text-gray-500">- publicado {post.createdAt}</p>
            </div>
          </div>
        ))}
      </ul>
      <Button
        action={"Ver Mas"}
        route={"posts"}
      ></Button>
    </section>
  );
}
