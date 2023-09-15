import React from 'react';
import css from './MoviesListCard.module.css'
import {useNavigate} from "react-router-dom";
import {StarsRatingComponent} from "../StarsRatingComponent";

const MoviesListCardComponent = ({movie}) => {
    const navigate = useNavigate()
    const {poster_path, id, vote_average, genre_ids, title} = movie;
    return (
        <div className={css.MoviesListCard}>

            <h2>title: {title}</h2>
            <StarsRatingComponent/>


        </div>
    );
};

export {MoviesListCardComponent};