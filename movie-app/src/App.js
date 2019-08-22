import React from 'react';
import './App.css';
import Movie from './Movie';

/* One main component has all of the data of the titles and images*/
const movieTitles = [
  "Interstellar",
  "Inside Out",
  "Inception",
  "If Only",
  "Her",
  "Eternal Sunshine of the Spotless Mind"
]

const movieImages= [
  "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/interstellar-movie-700x394.jpg",
  "https://www.psychologies.co.uk/sites/default/files/styles/psy2_page_header/public/field/image/inside-out-d150_20mcs.sel16.171.jpg",
  "https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1120/2/1122563.jpg",
  "https://static.tvno.nu/596438?forceFit=0&height=760&quality=50&width=1350",
  "https://img.thedailybeast.com/image/upload/v1492203926/articles/2013/12/21/how-her-gets-the-future-right/131220-romano-futurism-her-tease_d2uelz.jpg",
  "https://www.eatseehear.com/wp-content/uploads/2015/05/eternal-sunshine-of-the-spotless-mind-screenshot.jpg"
]

function App() {
  return (
    /* Create a Movie component and give them two props, 'title' and 'poster' */
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      <Movie title={movieTitles[4]} poster={movieImages[4]}/>
      <Movie title={movieTitles[5]} poster={movieImages[5]}/>
    </div>
  );
}


export default App;
