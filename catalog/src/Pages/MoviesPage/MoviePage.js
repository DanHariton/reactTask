import React from 'react';
import './MoviePage.css';
import { withRouter } from "react-router";
import ShakaPlayer from 'shaka-player-react';
import MovieApi from '../../util/MovieAPI';
import 'shaka-player/dist/controls.css';
import MovieMetadata from './components/MovieMetadata'
const defaultUrlImg = 'https://image.tmdb.org/t/p/w500/';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            movieDetail: [],
        };

        console.log(this.state);
    }

    componentDidMount() {
        this.setState({loading: true});
        MovieApi.getAllInfoAboutMovie(this.props.match.params.id,(response) => {
            this.setState({loading: false, movieDetail: response});
            console.log(this.state.movieDetail);
        });
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => response.json())
            .then((json) => {
                this.setState({loading: false, post: json});
            });
    }

    render() {
        return (
            <div>
                {this.state.loading &&
                <div className="alert alert-primary" role="alert">
                    Loading...
                </div>
                }

                <a className="back-button" href="/">{'< Back'}</a>
                <h2 className="movie-tittle">{this.state.movieDetail.title}</h2>
                <div className="movie-about">
                    <div className="movie-main-info">
                        <h4>About the movie {this.state.movieDetail.title}:</h4>
                        <p>
                            {this.state.movieDetail.overview}
                        </p>
                        <h4>Details:</h4>
                        <MovieMetadata release={this.state.movieDetail.release_date} tagline={this.state.movieDetail.tagline}
                                       budget={this.state.movieDetail.budget} vote={this.state.movieDetail.vote_average}
                                       runtime={this.state.movieDetail.runtime}/>
                    </div>
                    <img src={defaultUrlImg + this.state.movieDetail.backdrop_path} alt={this.state.movieDetail.title}/>
                </div>
                <ShakaPlayer height={1080} width={1920} autoPlay={true} src="https://www.radiantmediaplayer.com/media/bbb-360p.mp4" />
            </div>
        )
    };
}

export default withRouter(MoviePage);