import React, {useEffect} from 'react';
import {GenreBadgeComponent} from "./GenreBadgeComponent";
import css from "./GenresList.module.css"
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices/genreSlice";

const GenresListComponent = () => {
const dispatch = useDispatch();
const {genres} = useSelector(state => state.genre)
    console.log(genres)
    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);
    return (
        <div className={css.GenresList}>
            {genres && genres.map(genre=> <GenreBadgeComponent key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresListComponent};