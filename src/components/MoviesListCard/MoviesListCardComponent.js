import React from 'react';
import css from './MoviesListCard.module.css'
import {useNavigate} from "react-router-dom";
import {StarsRatingComponent} from "../StarsRatingComponent";
import {PosterPreviewComponent} from "../PosterPreview/PosterPreviewComponent";
const MoviesListCardComponent = ({movie}) => {
    const navigate = useNavigate()
    const {poster_path, id, vote_average, title} = movie;
    return (
        <div className={css.MoviesListCard} onClick={()=>navigate(`/movieinfo/${id}`)}>
            <PosterPreviewComponent poster_path ={poster_path}/>
            <h2> {title}</h2>
            <StarsRatingComponent vote_average = {vote_average}/>


        </div>
    );
};

export {MoviesListCardComponent};