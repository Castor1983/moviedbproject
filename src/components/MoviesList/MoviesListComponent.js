import React, {useEffect, useState} from 'react';
import {moviesListService} from "../../services/moviesListService";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import css from './MoviesList.module.css'
import {Pagination} from "@mui/material";
const MoviesListComponent = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
            moviesListService.getAll().then(({data}) => setMovies(data.results))

    }, []);
    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            <Pagination count={10} variant="outlined" shape="rounded" />

        </div>
    );
};

export {MoviesListComponent};