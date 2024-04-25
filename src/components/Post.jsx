import { Link } from "react-router-dom";

export default function Post({ source, title, body, created, id, author, route }) {
  return (
    <div
      key={id}
      className="flex flex-col items-center w-[45.8%] max-w-[200px] h-[400px] text-center"
    >
      <Link to={`/posts/${route}`} className="flex flex-col items-center h-[400px]">
        <div className="w-full">
          <img
            src={`/images/${source}`}
            alt={title}
            className="rounded h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-between overflow-hidden">
          <h3 className="text-xl text-center">{title}</h3>
          <p className="text-center h-full overflow-hidden text-ellipsis font-sans font-thin text-sm">{body}</p>
          <div className="h-fit">
            <p className="h-fit">- {author}</p>
            <p className="text-gray-500 h-fit">- publicado {created}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
