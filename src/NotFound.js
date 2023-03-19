import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>error 404</h2>
      <p>
        sorry my dude, the page you just requested cannot be found. try later
      </p>
      <Link to={'/'}> go home</Link>
    </div>
  )
}

export default NotFound
