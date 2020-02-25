import React from "react";

function MovieMetadata(props) {
    return (
        <div className="movie-metadata">
            <div>
                <p>Release date:</p>
                <p>{props.release}</p>
            </div>
            <div>
                <p>Tagline:</p>
                <p>{props.tagline}</p>
            </div>
            <div>
                <p>Budget:</p>
                <p>{new Intl.NumberFormat('ru-RU').format(props.budget)} $</p>
            </div>
            <div>
                <p>Vote average:</p>
                <p>{props.vote}</p>
            </div>
            <div>
                <p>Runtime:</p>
                <p>{props.runtime + 'm'}</p>
            </div>
        </div>
    );
}

export default MovieMetadata