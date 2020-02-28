import React from "react";
import HomeCategoryItem from "../../Home/components/HomeCategoryItem";

/**
 * render search result function
 * @param props
 * @returns {*}
 * @constructor
 */
function SearchResult(props) {
    return (
        <div className="search-results">
            {props.searchResult.length > 0 ? props.searchResult.map((category) =>
                <HomeCategoryItem className="movie-detail" key={category.id} movie={category}/> ) : <div className="search-not-result">
                Unfortunately we did not find anything :(
            </div>}
        </div>
    );
}

export default SearchResult

