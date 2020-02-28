import React from 'react';
import './SearchMovie.css';
import MovieApi from "../../util/MovieAPI";
import {withRouter} from "react-router";
import SearchResult from "./components/SearchResult";
import SearchForm from "./components/SearchForm";

/**
 * render Search movie page with all components
 */
class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            searchResult: [],
        };
    }

    /**
     * slice rezult for 5 items.. for test mode
     * @param array
     * @returns {*}
     */
    sliceResult(array) {
        return array.slice(0, 5);
    }

    componentDidMount() {
        this.setState({loading: true});
        MovieApi.searchMovie(this.props.match.params.searchingMovie,(response) => {
            this.setState({loading: false, searchResult: response});
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1 className="app-tittle">
                    <a href="/">HD REZKA</a>
                </h1>
                <SearchForm searchValue={this.props.match.params.searchingMovie}/>
                <h3 className="search-tittle">That's what we found for you:</h3>
                <SearchResult searchResult={this.sliceResult(this.state.searchResult)}/>
            </div>
        )
    };
}

export default withRouter(SearchMovie);