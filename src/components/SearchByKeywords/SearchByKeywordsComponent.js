import React, {useEffect, useState} from 'react';
import {SearchForm} from "./SearchForm";

import {Pagination} from "@mui/material";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import css from "./SerchKeywords.module.css";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movieSlice";

const SearchByKeywordsComponent = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch()
    const {movies, totalPages} = useSelector(state => state.movie)
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const {example} = inputText
      useEffect(() => {
            dispatch(movieActions.getSearchByKeywords({example, page}))
            }, [page, example]);
    return (
        <div className={css.Keywords}>
            <SearchForm setInputText={setInputText}/>
            {movies && movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            {inputText && <Pagination className={css.Pagination} count={+totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange}/>}
        </div>

    );
};

export {SearchByKeywordsComponent};