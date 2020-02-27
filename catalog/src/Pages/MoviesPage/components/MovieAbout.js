import React from "react";
import MovieMetadata from "./MovieMetadata";

const defaultUrlImg = 'https://image.tmdb.org/t/p/w500/';


function MovieAbout(props) {
    return (
        <div className="movie-about">
            <div className="movie-main-info">
                <h4>About the movie {props.movieDetail.title}:</h4>
                <p>
                    {props.movieDetail.overview}
                </p>
                <h4>Details:</h4>
                <MovieMetadata release={props.movieDetail.release_date} tagline={props.movieDetail.tagline}
                               budget={props.movieDetail.budget} vote={props.movieDetail.vote_average}
                               runtime={props.movieDetail.runtime}/>
            </div>
            <img src={defaultUrlImg + props.movieDetail.backdrop_path} alt={props.movieDetail.title}/>
        </div>
    );
}

export default MovieAbout