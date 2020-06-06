import React, { useState, useEffect } from "react";
import { NO_IMAGE_URL, POSTER_PATH } from "../../constants";
import {
  Wrapper,
  MovieDescription,
  Poster,
  MovieTitle,
  MovieRating,
  MovieDate,
} from "./Movie.styled";
import { parseDate } from "../../utils";

const Movie = ({ movie }) => {
  const [posterPath, setPosterPath] = useState("");
  useEffect(
    () =>
      setPosterPath(
        movie.poster_path ? `${POSTER_PATH}${movie.poster_path}` : NO_IMAGE_URL
      ),
    []
  );
  return (
    <Wrapper>
          <Poster src={posterPath} />
          <div>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieDate>Дата выхода: {parseDate(movie.release_date)}</MovieDate>
            <MovieRating>Средняя оценка: {movie.vote_average}/10</MovieRating>
            <MovieDescription>{movie.overview}</MovieDescription>
          </div>
    </Wrapper>
  );
};

export default Movie;
