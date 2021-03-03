import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form-movies" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        value={query}
        className="form-input-movies"
        onChange={(e) => onQueryChange(e)}
      />
      {error.show && <div className="error-movies">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
