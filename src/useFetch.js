import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('something went wrong my dude, try later')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
        })
        .catch((err) => setError(err.message))
    }, 2000)
  }, [url])

  return { data, isPending, error }
}

export default useFetch
