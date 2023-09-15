import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import * as PropTypes from "prop-types";
import {moviesListService} from "../services/moviesListService";
import {MoviesListCardComponent} from "./MoviesListCardComponent";

function MoviesListCard(props) {
    return null;
}

MoviesListCard.propTypes = {};
const MoviesListComponent = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
            moviesListService.getAll().then(({data}) => setMovies(data.results))

    }, []);
    return (
        <div style={{width: '100wh'}}>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesListComponent};