import BlogsList from './BlogsList'
import useFetch from './useFetch'

const Home = () => {
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="container">
      {data && <BlogsList blogs={data} />}
      {error && <p> {error} </p>}
      {isPending && <p>loading...</p>}
    </div>
  )
}

export default Home
