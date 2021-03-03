import React from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import QuizApp from "../apps/quizApp";
import MoviesFinder from "../apps/moviesFinder";
import HackerNews from "../apps/hackerNews";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <QuizApp />
        </Route>
        <Route exact path="/moviesfinder">
          <MoviesFinder />
        </Route>
        <Route exact path="/hackernews">
          <HackerNews />
        </Route>
      </Switch>
    </>
  );
};

export default App;
