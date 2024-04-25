import { Link } from "react-router-dom"

export default function Button({ action, route }) {
  return (
    <div className="bg-violet-500 px-5 w-fit rounded transition ease-in-out hover:scale-110 duration-300 my-5">
        <Link to={`/${ route }`}>
            <span>{ action }</span>
        </Link>
    </div>
  )
}
