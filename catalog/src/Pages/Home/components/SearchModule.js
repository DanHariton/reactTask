import React from 'react';
import { withRouter} from 'react-router-dom'

class SearchModule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setRedirect = () => {
        this.setState({redirect: true})
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value === '') {
            alert('You entered nothing! ');
            event.preventDefault();
        }
        if (this.state.redirect) {
            this.props.history.push('/search/' + this.state.value);
        }
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label>
                    <input className="search-area" placeholder="Search movie..." type="text"
                           value={this.state.value} onChange={this.handleChange} />
                </label>
                <button onClick={this.setRedirect} className="search-button" type="submit">
                    <img src={"./search.png"} alt="search"/>
                </button>
            </form>
        );
    }
}


export default withRouter(SearchModule)