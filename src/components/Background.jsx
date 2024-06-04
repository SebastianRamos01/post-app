import Header from "./Header"

export default function Background({children}) {
  return (
    <div className="bg-gradient-to-br from-black to-violet-950 text-white font-amatic z-10">
      <Header></Header>
        { children }
    </div>
  )
}
