import { Link } from 'react-router-dom'

const BlogsList = ({ blogs }) => {
  return (
    <div className="blogs-list">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogdetails/${blog.id}`}>
              <h2> {blog.title} </h2>
              <p> {blog.author} </p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogsList
