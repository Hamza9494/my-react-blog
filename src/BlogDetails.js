import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const {
    data: blog,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id)

  const navigate = useNavigate()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    })
    navigate('/')
  }

  return (
    <div className="blog-details">
      {isPending && <p>loading...</p>}
      {error && <p> {error} </p>}

      {blog && (
        <div className="blog-data">
          <h2> {blog.title} </h2>
          <p> {blog.body} </p>
          <p> {blog.author} </p>
          <button className="delete-btn" onClick={handleDelete}>
            delete blog
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
