import React, {useState} from 'react';
import css from "./MovieDetails.module.css";
import {posterURL} from "../../constants/urls";
import {Rating} from "@mui/material";

const MovieDetailsComponent = ({movie}) => {
const {backdrop_path, title, overview, genres, vote_average, release_date, runtime, budget} = movie;

    return (
        <div className={css.MovieDetails}>
            <div className={css.title}>
                <img src={`${posterURL}${backdrop_path}`} className={css.img}/>
                <h1>{title}</h1>
            </div>
            <div className={css.textInfo}>
                <div>{overview}</div>
                {vote_average && <Rating name="customized-10"  value={vote_average} max={10} precision={0.1} size="large" readOnly/>}
                <div> Genres: {genres?.map(genre=>(<div key={genre.id}>{genre.name}</div>))}</div>
                <div>Relise date: {release_date}</div>
                <div>Runtime:{runtime} min.</div>
                <div>Budget: {budget}$</div>
            </div>

        </div>
    );
};

export {MovieDetailsComponent};