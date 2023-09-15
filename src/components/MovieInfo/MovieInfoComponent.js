import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieInfoService} from "../../services/movieInfoService";
import css from './MovieInfo.module.css'
import {posterURL} from "../../constants/urls";
import {Rating} from "@mui/material";
import {MovieDetailsComponent} from "../MovieDetails/MovieDetailsComponent";
const MovieInfoComponent = () => {
    const [movie, setMovie] = useState([])
    const{id} = useParams()
    useEffect(()=> {
        movieInfoService.getAll(id).then(({data})=> setMovie(data))
    }, [])
    return (
        <div className={css.MovieInfo}>
            <MovieDetailsComponent movie={movie}/>

        </div>
    );
};

export {MovieInfoComponent};