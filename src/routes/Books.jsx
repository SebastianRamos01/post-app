import React from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import { books } from "../data/books";
import { Link } from "react-router-dom";

export default function Books() {
  return (
    <Background>
      <section className="mx-5">
        <ul className="flex gap-5 flex-col">
          {books.map((elem, i) => {
            return (
              <article
                key={i}
                className="font-sans relative h-[560px] rounded-lg min-w-[280px] max-w-[385]"
              >
                <div className="h-full w-full relative overflow-hidden rounded-lg">
                  <img
                    src={`/images/books/${elem.image}`}
                    alt={elem.name}
                    className="absolute scale-[1.8] right-0 bottom-0"
                  />
                </div>
                <div className="absolute z-10 top-0 bg-black bg-opacity-40 h-full w-full flex flex-col justify-end p-2">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{elem.name}</p>
                    <Link
                      to={`/posts/${i}`}
                      className="bg-violet-700 px-6 py-1 my-2 rounded w-fit"
                    >
                      Leer Mas
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </ul>
        <Footer></Footer>
      </section>
    </Background>
  );
}
