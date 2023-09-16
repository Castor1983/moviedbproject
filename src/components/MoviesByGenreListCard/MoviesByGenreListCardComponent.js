import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "../MoviesListCard/MoviesListCard.module.css";
import {PosterPreviewComponent} from "../PosterPreview/PosterPreviewComponent";
import {StarsRatingComponent} from "../StarsRatingComponent";

const MoviesByGenreListCardComponent = ({movie}) => {const navigate = useNavigate()
    const {poster_path, id, vote_average, title} = movie;
    return (
        <div className={css.MoviesListCard} onClick={()=>navigate(`/movieinfo/${id}`)}>
            <PosterPreviewComponent poster_path ={poster_path}/>
            <h2> {title}</h2>
            <StarsRatingComponent vote_average = {vote_average}/>


        </div>
    );
};

export {MoviesByGenreListCardComponent};