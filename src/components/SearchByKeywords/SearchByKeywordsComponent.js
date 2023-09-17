import React, {useEffect, useState} from 'react';
import {SearchForm} from "./SearchForm";

import {Pagination} from "@mui/material";
import {searchByKeywordsService} from "../../services/searchByKeywordService";
import {MoviesListCardComponent} from "../MoviesListCard/MoviesListCardComponent";
import css from "./SerchKeywords.module.css";

const SearchByKeywordsComponent = () => {
    const [inputText, setInputText] = useState('');
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

      useEffect(() => {
            searchByKeywordsService.getAll(inputText.example, page).then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
            })

        }, [page, inputText]);


    return (
        <div className={css.Keywords}>
            <SearchForm setInputText={setInputText}/>
            {movies.map(movie => <MoviesListCardComponent key={movie.id} movie={movie}/>)}
            {inputText && <Pagination className={css.Pagination} count={+totalPages} variant="outlined" shape="rounded" page={page} onChange={handleChange}/>}
        </div>

    );
};

export {SearchByKeywordsComponent};