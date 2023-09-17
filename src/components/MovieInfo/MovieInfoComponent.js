import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieInfoService} from "../../services/movieInfoService";
import css from './MovieInfo.module.css'
import {MovieDetailsComponent} from "../MovieDetails/MovieDetailsComponent";
const MovieInfoComponent = () => {
    const [movie, setMovie] = useState([])
    const{id} = useParams()
    useEffect(()=> {
        movieInfoService.getAll(id).then(({data})=> setMovie(data))
    }, [id])
    return (
        <div className={css.MovieInfo}>
            <MovieDetailsComponent movie={movie}/>

        </div>
    );
};

export {MovieInfoComponent};