import React, {useEffect, useState} from 'react';
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import css from './MoviesList.module.css'
import {Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";
const MoviesListComponent = () => {
    const dispatch = useDispatch();
    const {movies, totalPages} = useSelector(state => state.movie);
    const [page, setPage] = useState(1);
    const navigate = useNavigate()

    const handleChange = (event, value) => {
        setPage(value)
    };
    useEffect(() => {
        dispatch(movieActions.getAll(page));
        navigate({pathname: `/movies/${page}`})

    }, [ dispatch, page]);

    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            <Pagination  className={css.Pagination} count={+totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} />
        </div>
    );
};

export {MoviesListComponent};