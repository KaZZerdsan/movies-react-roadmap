import React, { forwardRef, useRef} from 'react'
import { Poster, PosterImage } from './Preview.styled'
import { NO_IMAGE_URL } from '../../constants'

const Preview = forwardRef((props, ref) => {
    const picRef = useRef()
    const { movie, showDetails } = props
    const picUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
    const src = (movie.poster_path
        ? `${picUrl}${movie.poster_path}`
        : NO_IMAGE_URL) 
    return (
        <Poster ref={ref} data-large={NO_IMAGE_URL}>
            <PosterImage
                ref={picRef}
                src={src}
                alt={movie.original_title}
                onClick={() => showDetails(movie)}
            />
        </Poster>
    )
})

export default Preview