import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import List from './components/List'
import PostView from './routes/PostView'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/posts' element={ <List/> }></Route>
        <Route path='/posts/:id' element={ <PostView/> }></Route>
      </Routes>
    </>
  )
}

export default App
