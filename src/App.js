import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={}

    // const movies = [
    //   {id: 0, poster_src: "infinity_war.jpg", title: "Avenger: Infinity War", overview:"As the Avengers and their allies have continued to protect the world from threats too large "},
    //   {id: 1, poster_src: "the_avengers.jpg", title: "The Avenger", overview:"This is my second overview "},
    // ]

    // let movieRows = []

    // movies.forEach((movie) => {
    //   console.log(movie.title);
    //   const movieRow = <MovieRow movie={movie} />
      
    // movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}
    this.performSearch()
  }
  performSearch(){
    console.log("Perform search using moviedb");
    const urlString = "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=1b5adf76a72a13bad99b8fc0c68cb085"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        const results = searchResults.results

        let movieRows = []
        results.forEach((movie) => {
          console.log(movie.title);
          const movieRow = <MovieRow movie={movie} />
          movieRows.push(MovieRow)
        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
        
      }
    })
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="icon_movie_db.png" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: '99%',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term" />

        {this.state.rows}

      </div>
    )
  }
}

export default App;
