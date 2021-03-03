import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
const Home = () => {
  return (
    <main className="main-movies">
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
