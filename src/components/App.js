import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Searchbar from './Searchbar/Searchbar'
import "./App.css"
import MovieDetails from './MovieList/MovieDetails'

const App = () => {

  return (
    <div className="app-container">
      <Router>
        <Switch >
          <Route exact path="/" component={Searchbar} />
          <Route exact path="/movie-detail/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  )

}

export default App;
