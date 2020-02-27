import React from 'react';
import { withRouter} from 'react-router-dom'


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

        if (props.searchValue)
            this.searchingMovie = props.searchValue;


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setRedirect = () => {
        this.setState({redirect: true})
    };

    handleSubmit() {
        this.props.history.push('/');
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label>
                    <input className="search-area" placeholder="Search movie..." type="text"
                           value={this.searchingMovie} readOnly/>
                </label>
                <button onClick={this.setRedirect} className="search-button" type="submit">
                    <img src={"./../close.png"} alt="close"/>
                </button>
            </form>
        );
    }
}

export default withRouter(SearchForm)