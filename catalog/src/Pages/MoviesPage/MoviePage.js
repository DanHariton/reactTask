import React from 'react';
import './MoviePage.css';
import { withRouter } from "react-router";
import ShakaPlayer from 'shaka-player-react';
import MovieApi from '../../util/MovieAPI';
import 'shaka-player/dist/controls.css';
import MovieAbout from "./components/MovieAbout";

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.controllerRef = React.createRef();
        this.state = {
            isPlay: false,
            loading: false,
            movieDetail: [],
        };
        this.openShakaPlayer = () => {
            const {
                /** @type {HTMLVideoElement} */ videoElement,
            } = this.controllerRef.current;
            videoElement.requestFullscreen();
            videoElement.play();
            this.setState({isPlay: true});
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        MovieApi.getAllInfoAboutMovie(this.props.match.params.id,(response) => {
            this.setState({loading: false, movieDetail: response});
            console.log(this.state.movieDetail);
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
                <MovieAbout movieDetail={this.state.movieDetail}/>
                <button className="play-button" onClick={this.openShakaPlayer}>
                    Play
                </button>
                <div className={this.state.isPlay ? '' : 'hidden'}>
                    <ShakaPlayer  ref={this.controllerRef} height={1080} width={1920}
                                  autoPlay={false} src="https://www.radiantmediaplayer.com/media/bbb-360p.mp4" />
                </div>
            </div>
        )
    };
}

export default withRouter(MoviePage);