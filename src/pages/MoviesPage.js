import React from 'react';
import {MoviesListComponent} from "../components/MoviesList/MoviesListComponent";
import {Pagination} from "@mui/material";

const MoviesPage = () => {
    return (
        <div>
            <MoviesListComponent/>
        </div>
    );
};

export {MoviesPage};