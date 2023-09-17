import React, {useEffect, useState} from 'react';
import css from "../MoviesList/MoviesList.module.css";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import {Pagination} from "@mui/material";

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";

const MoviesByGenreListComponent = () => {
    const dispatch = useDispatch();
    const {movies, totalPages} = useSelector(state => state.movie);
    const [page, setPage] = useState(1);
    const {genre}=useParams()
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch(movieActions.getFilterByGenre({page, genre: +genre}))
    }, [page, genre]);
    return (
        <div className={css.MoviesList}>
            {movies&& movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            <Pagination className={css.Pagination} count={+totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} />

        </div>
    );
};

export {MoviesByGenreListComponent};