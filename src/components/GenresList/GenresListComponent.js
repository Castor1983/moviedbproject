import React, {useEffect, useState} from 'react';
import {genreListService} from "../../services/genreListService";
import {GenreBadgeComponent} from "./GenreBadgeComponent";
import css from "./GenresList.module.css"

const GenresListComponent = () => {

    const [genres, setGenres] = useState([])
    useEffect(() => {
genreListService.getAll().then(({data}) => setGenres(data.genres))
    }, []);
    return (
        <div className={css.GenresList}>
            {genres.map(genre=> <GenreBadgeComponent key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresListComponent};