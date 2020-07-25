import React from 'react';
import './malika_baby.jpg';
const Recipe = ({ label, calories, image, ingredient }) => {
    return (
        <div className="container">
            <div className="img__container"><img src={image} alt="" />
            </div>
            <div className="info__container"> <div className="title__container">
                <div className="title">{label}</div>
                <div className="calories">{calories}cal</div>
            </div>
                <div className="ingredients__container">
                    <div className="ingredients">{ingredient}</div>
                </div>
            </div>
        </div>
    )
}

export default Recipe
