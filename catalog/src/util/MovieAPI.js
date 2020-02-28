const axios = require('axios');
const basicUrl = 'https://api.themoviedb.org/3';
const apiKey = '&api_key=88438f3818e62f0c2bc9f681c162815f';

/**
 * @type {{getAllInfoAboutMovie: module.exports.getAllInfoAboutMovie, searchMovie: module.exports.searchMovie,
 * getMostPopularMoviesHorror: module.exports.getMostPopularMoviesHorror,
 * getMostPopularFamilyMovies: module.exports.getMostPopularFamilyMovies,
 * getMostPopularMovies: module.exports.getMostPopularMovies,
 * getMostPopularHistoryMovies: module.exports.getMostPopularHistoryMovies}}
 */
module.exports = {
    /**
     * get most popular movies
     * @param callback
     */
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

    /**
     * get most popular Horror movies
     * @param callback
     */
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

    /**
     * get most popular Family movies
     * @param callback
     */
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

    /**
     * get most popular history movies
     * @param callback
     */
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

    /**
     * Get info about Movie by ID
     * @param movieId
     * @param callback
     */
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

    /**
     * Search movie by name
     * @param searchingMovie
     * @param callback
     */
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