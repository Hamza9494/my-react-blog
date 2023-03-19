import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
  const [title, setTitle] = useState(' ')
  const [body, setBody] = useState(' ')
  const [author, setAuthor] = useState(' mario ')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => navigate('/'))
  }

  return (
    <div className="create-blog">
      <h2>add blog</h2>
      <form onSubmit={handleSubmit}>
        <label>title:</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="hamza">hamza</option>
        </select>
        <button className="add-blog">add blog</button>
      </form>
    </div>
  )
}

export default Create
