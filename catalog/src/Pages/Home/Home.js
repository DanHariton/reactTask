import React from 'react';
import './Home.css';
import HomeCategory from "./components/HomeCategory";
import MovieApi from '../../util/MovieAPI';
import SearchModule from './components/SearchModule';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingPage: false,
            popularMoviesHorror: [],
            popularMovies: [],
            popularHistoryMovies: [],
            popularFamilyMovies: [],
        }
    }

    componentDidMount() {
        MovieApi.getMostPopularMovies((response) => {
            this.setState({popularMovies: response});
        });
        MovieApi.getMostPopularMoviesHorror((response) => {
            this.setState({popularMoviesHorror: response});
        });
        MovieApi.getMostPopularHistoryMovies((response) => {
            this.setState({popularHistoryMovies: response});
        });
        MovieApi.getMostPopularFamilyMovies((response) => {
            this.setState({popularFamilyMovies: response});
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1 className="app-tittle">
                    <a href="/">APP TITLE</a>
                </h1>
                <SearchModule />
                <HomeCategory categoryName="Popular movies" moviesList={this.state.popularMovies}/>
                <HomeCategory categoryName="Family" moviesList={this.state.popularFamilyMovies}/>
                <HomeCategory categoryName="Horror" moviesList={this.state.popularMoviesHorror}/>
                <HomeCategory categoryName="History" moviesList={this.state.popularHistoryMovies}/>
            </div>);
    };
}

export default Home;