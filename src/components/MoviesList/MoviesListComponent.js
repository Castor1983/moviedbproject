import React, {useEffect, useState} from 'react';
import {moviesListService} from "../../services/moviesListService";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import css from './MoviesList.module.css'
const MoviesListComponent = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
            moviesListService.getAll().then(({data}) => setMovies(data.results))

    }, []);
    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}

        </div>
    );
};

export {MoviesListComponent};