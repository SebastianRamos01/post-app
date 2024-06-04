import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import PostView from './routes/PostView'
import Books from './routes/Books'
import Posts from './routes/Posts'
import { useEffect } from 'react'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/posts' element={ <Posts/> }></Route>
        <Route path='/posts/:id' element={ <PostView/> }></Route>
        <Route path='/books' element={ <Books/> }></Route>
      </Routes>
    </>
  )
}

export default App

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}