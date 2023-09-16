import React, {useEffect, useState} from 'react';
import css from "../MoviesList/MoviesList.module.css";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import {Pagination} from "@mui/material";
import {moviesFilterByGenreService} from "../../services/moviesfFilterByGenreService";
import {useParams} from "react-router-dom";

const MoviesByGenreListComponent = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [page, setPage] = useState(1);
    const {genre}=useParams()
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        moviesFilterByGenreService.getAll(page, genre).then(({data}) => {
            setMovies(data.results)
            setTotalPages(data.total_pages)
        })

    }, [page, genre]);
    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            <Pagination count={+totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange} />

        </div>
    );
};

export {MoviesByGenreListComponent};