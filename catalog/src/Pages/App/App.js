import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../Home/Home";
import MoviePage from "../MoviesPage/MoviePage";

function App() {
  return (
      <div className="container">
          <Router>
              <Switch>
                  <Route path="/movie/:id">
                      <MoviePage/>
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;