import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      movies: []
    }
  }

  // when component added to virtual DOM
  componentDidMount() {
    //fetch API
    fetch('http://www.omdbapi.com/?s=batman&apikey=a9e9323c')
    .then(response => response.json())
    .then(json => {
      this.setState({
        movies: json.Search
      })
    })
  }

  handleChange= (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" />
      <MovieList movies= {this.state.movies} />
      </div>
    )
  }
}

export default App;
