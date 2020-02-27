const axios = require('axios');
const basicUrl = 'https://api.themoviedb.org/3';
const apiKey = '&api_key=88438f3818e62f0c2bc9f681c162815f';


module.exports = {
    getMostPopularMovies: (callback = null) => {
        axios.get(basicUrl + '/discover/movie?sort_by=popularity.desc&include_video=1' + apiKey)
            .then(function (response) {
                if(callback)
                    callback(response.data.results);

                return response;
            })
            .catch(function (error) {
                console.log(error);
                if (callback) {
                    callback(error.response);
                }
            });
    },

    getMostPopularMoviesHorror: (callback = null) => {
        axios.get(basicUrl + '/discover/movie?with_genres=27&sort_by=popularity.desc&include_video=1' + apiKey)
            .then(function (response) {
                if(callback)
                    callback(response.data.results);

                return response;
            })
            .catch(function (error) {
                console.log(error);
                if (callback) {
                    callback(error.response);
                }
            });
    },

    getMostPopularFamilyMovies: (callback = null) => {
        axios.get(basicUrl + '/discover/movie?with_genres=10751&sort_by=popularity.desc&include_video=1' + apiKey)
            .then(function (response) {
                if(callback)
                    callback(response.data.results);

                return response;
            })
            .catch(function (error) {
                console.log(error);
                if (callback) {
                    callback(error.response);
                }
            });
    },

    getMostPopularHistoryMovies: (callback = null) => {
        axios.get(basicUrl + '/discover/movie?with_genres=36&sort_by=popularity.desc&include_video=1' + apiKey)
            .then(function (response) {
                if(callback)
                    callback(response.data.results);

                return response;
            })
            .catch(function (error) {
                console.log(error);
                if (callback) {
                    callback(error.response);
                }
            });
    },

    getAllInfoAboutMovie: (movieId, callback = null) => {
        axios.get(basicUrl + '/movie/' + movieId + '?language=en-US' + apiKey)
            .then(function (response) {
                if (callback)
                    callback(response.data);

                return response;
            })
            .catch(function (error) {
                console.log(error);
                if (callback) {
                    callback(error.response);
                }
            });
    },

    searchMovie: (searchingMovie, callback = null) => {
        axios.get(basicUrl + '/search/movie?language=en-US&query=' + searchingMovie + '&page=1&include_adult=true' + apiKey)
            .then(function (response) {
                if (callback)
                    callback(response.data.results);

                return response;
            })
            .catch(function (error) {
                console.log(error);
                if (callback) {
                    callback(error.response);
                }
            })
    }
};