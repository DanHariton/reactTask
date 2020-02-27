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
    slidesToScroll: 7,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: false
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: false
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
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