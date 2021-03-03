import React from "react";
import "./moviesFinder.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const MoviesFinder = () => {
  return (
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  );
};

export default MoviesFinder;
