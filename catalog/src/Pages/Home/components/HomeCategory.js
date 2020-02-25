import React from 'react';
import HomeCategoryItem from "./HomeCategoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7
};


function HomeCategory(props) {
    return (
        <div className="category">
            <div className="category-tittle">
                <h3>{props.categoryName}</h3>
            </div>
            <div className="movie-list">
                <Slider {...settings}>
                    {props.moviesList.map((category) => <HomeCategoryItem className="movie-detail" key={category.id} movie={category}/> )}
                </Slider>
            </div>
        </div>
    );
}

export default HomeCategory;