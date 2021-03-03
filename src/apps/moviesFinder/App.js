import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <Switch>
      <Route path="/moviesfinder" exact>
        <Home />
      </Route>
      <Route children={<SingleMovie />} path="/moviesfinder/:id" />
    </Switch>
  );
}

export default App;
