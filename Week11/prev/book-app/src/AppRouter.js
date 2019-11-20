import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Page from "./pages/Page";
import BookPage from "./pages/Book"

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page name="Home" />
        </Route>
        <Route exact path="/books/:id">
          <BookPage />
        </Route>
        <Route>
          <Page name="NotFound" />
        </Route>
      </Switch>
    </Router>
  );
};
