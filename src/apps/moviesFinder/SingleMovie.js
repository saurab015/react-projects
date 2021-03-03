import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
const SingleMovie = () => {
  const { id } = useParams();

  console.log(id);
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading-movies"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error-movies">
        <h1>{error.msg}</h1>
        <Link to="/moviesfinder" className="btn-movies">
          back to movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <section className="single-movie-movies">
      <img src={poster} alt={title} />
      <div className="single-movie-info-movies">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/moviesfinder" className="btn-movies">
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
