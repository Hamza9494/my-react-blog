import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <h2>my react blog</h2>
      </Link>
      <div className="links">
        <Link to={'/'}>home</Link>
        <Link to={'/create'}>create</Link>
      </div>
    </div>
  )
}

export default Navbar
