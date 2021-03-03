import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading-movies"></div>;
  }
  console.log(movies, isLoading);
  return (
    <section className="movies-movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title } = movie;
        return (
          <Link to={`/moviesfinder/${id}`} key={id} className="movie-movies">
            <article>
              <img src={poster === "N/A" ? url : poster} alt={title} />
              <div className="movie-info-movies">
                <h4 className="title-movies">{title}</h4>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
