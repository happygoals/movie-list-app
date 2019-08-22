import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                {/* Pass the poster */}
                <MoviePoster poster={this.props.poster}/> 
                {/* Show the title */} 
                <h1>{this.props.title} </h1>
            </div>
        )
    }
}

{ /*Children Component*/ }
class MoviePoster extends Component{
    render(){
        console.log(this.props);
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie; 