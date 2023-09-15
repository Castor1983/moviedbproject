import React, {useEffect, useState} from 'react';
import {moviesListService} from "../../services/moviesListService";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import css from './MoviesList.module.css'
import {Pagination} from "@mui/material";
const MoviesListComponent = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(() => {
            moviesListService.getAll(page).then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })

    }, [page]);
    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            <Pagination count={totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} />

        </div>
    );
};

export {MoviesListComponent};