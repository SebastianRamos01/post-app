import Header from "./Header"

export default function Background({children}) {
  return (
    <div className="bg-gradient-to-br from-black to-violet-950 text-white font-amatic pb-[40px] z-10">
      <Header></Header>
        { children }
    </div>
  )
}
