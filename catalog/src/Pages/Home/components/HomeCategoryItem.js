import React from 'react';
import {Link} from "react-router-dom";

const defaultUrlImg = 'https://image.tmdb.org/t/p/w154/';

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function HomeCategoryItem(props) {
    return (
        <Link className="movie-poster" to={'/movie/' + props.movie.id}>
            <img src={defaultUrlImg + props.movie.poster_path}  alt={props.movie.title}/>
            <h4 className="film-title">
                {props.movie.title}
            </h4>
        </Link>
    );
}

export default HomeCategoryItem;