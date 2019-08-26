import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = { 
        /* If the parent component send a string, we can check string using PropTypes. */ 
        /* If it is not correct, we will get an error message. We can check what is the kinds of infromation from the parent component. */ 
        title: PropTypes.string.isRequired, // 'isRequired': It is required to offer prop called title from the movie component. 
        poster: PropTypes.string.isRequired
    }
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

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        console.log(this.props);
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie; 