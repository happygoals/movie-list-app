import React from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Interstella",
    poster: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/interstellar-movie-700x394.jpg"
  },
  {
    title: "Inside Out", 
    poster: "https://www.psychologies.co.uk/sites/default/files/styles/psy2_page_header/public/field/image/inside-out-d150_20mcs.sel16.171.jpg"
  },
  {
    title: "Inception", 
    poster: "https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1120/2/1122563.jpg"
  },
  {
    title: "If Only",
    poster: "https://static.tvno.nu/596438?forceFit=0&height=760&quality=50&width=1350"
  },
  {
    title: "Her",
    poster: "https://img.thedailybeast.com/image/upload/v1492203926/articles/2013/12/21/how-her-gets-the-future-right/131220-romano-futurism-her-tease_d2uelz.jpg"
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    poster: "https://www.eatseehear.com/wp-content/uploads/2015/05/eternal-sunshine-of-the-spotless-mind-screenshot.jpg"
  }
] 

function App() {
  return (
    /* Create a Movie component and give them two props, 'title' and 'poster' */
    <div className="App">
      {/* An array 'movies' has a function, something called a map.  Take this movies array and map through it */ }
      {movies.map((movie, index) => { /* Make a new array 'movie'. 'index' is the current element number we are providing.  */
        return <Movie title={movie.title} poster={movie.poster} key={index} /> /* Make a Movie for each element inside of array 'movies'*/
      })}
    </div>
  );
}


export default App;
