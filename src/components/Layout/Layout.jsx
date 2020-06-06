import React, { useState, useRef } from "react";
import { useSearchMovies } from "../../hooks";
import { Container, MovieContainer } from "./Layout.styled";
import { Preview } from "../Preview";
import { Header } from "../Header";
import { DetailsDialog } from "../DetailsDialog";
import { Paginator } from "../Paginator";

const Layout = () => {
  const ref = useRef();
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState({});

  const showDetails = (movie) => {
    setIsOpen(true);
    setMovie(movie);
  };

  const changePage = (page) => {
    setPageNumber(page);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const { movies, totalPages } = useSearchMovies(query, pageNumber);

  return (
    <Container>
      <Header setQuery={setQuery} setPageNumber={setPageNumber} />
      <MovieContainer ref={ref}>
        {movies.map((movie) => (
          <Preview
            movie={movie}
            key={movie.original_title}
            showDetails={showDetails}
          />
        ))}
        {isOpen && (
          <DetailsDialog
            open={isOpen}
            handleClose={closeDialog}
            movie={movie}
          />
        )}
      </MovieContainer>
      <Paginator
        totalPages={totalPages}
        currentPage={pageNumber}
        onChangePage={changePage}
      />
    </Container>
  );
};

export default Layout;
