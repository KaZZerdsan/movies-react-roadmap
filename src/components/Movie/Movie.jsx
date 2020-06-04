import React, { useState, useEffect } from 'react'
import { NO_IMAGE_URL, POSTER_PATH } from '../../constants'
import { Wrapper, Header, Title, Info, Poster, MovieTitle, MovieDate } from './Movie.styled'
import { parseDate } from '../../utils'

const Movie = ({movie}) => {
    const [posterPath, setPosterPath] = useState('')
    useEffect(() => 
        setPosterPath(movie.poster_path
            ? `${POSTER_PATH}${movie.poster_path}`
            : NO_IMAGE_URL),
        [])
    return (
        <Wrapper>
            <Info>
                <Poster src={posterPath} />
                <div style={{width: '69%'}}>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieDate>{`Дата выхода: ${parseDate(movie.release_date)}`}</MovieDate>
                    <p>{`Средняя оценка: ${movie.vote_average}/10`}</p>
                </div>
            </Info>
                    <p>{movie.overview}</p>
        </Wrapper>
    )
    }

export default Movie