import { useEffect, useState } from 'react'
import axios from 'axios'
import { defaultSettings } from '../utils'

const apiUrl = 'https://api.themoviedb.org/3/'

export default (query, pageNumber) => {
    const [movies, setMovies] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
      let cancel
      let queryString
      defaultSettings.params.query = query
      defaultSettings.params.page = pageNumber
      if (defaultSettings.params.query) {
        queryString = `search/movie`
      } else {
        queryString = `movie/popular`
      }
      defaultSettings.cancelToken = new axios.CancelToken(c => cancel = c)
      axios(`${apiUrl}${queryString}`, {...defaultSettings})
        .then(response => {
          setMovies(response.data.results)
          setTotalPages(response.data.total_pages)
        })
        .catch(e => {
          if (axios.isCancel(e)) {
            return
        }
      })
      return () => cancel()
    }, [query, pageNumber])
    return { movies, totalPages }
}

