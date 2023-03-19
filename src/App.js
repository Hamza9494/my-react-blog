import Home from './Home'
import Navbar from './Nvabr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/blogdetails/:id" element={<BlogDetails />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
