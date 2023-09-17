import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import css from './MovieInfo.module.css'
import {MovieDetailsComponent} from "../MovieDetails/MovieDetailsComponent";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
const MovieInfoComponent = () => {
    const dispatch = useDispatch()
    const {movie} = useSelector(state => state.movie)
    const{id} = useParams()
    console.log(id)
    useEffect(()=> {
        dispatch(movieActions.getById({id:+id}))
    }, [id])
    return (
        <div className={css.MovieInfo}>
            {movie && <MovieDetailsComponent movie={movie}/>}

        </div>
    );
};

export {MovieInfoComponent};