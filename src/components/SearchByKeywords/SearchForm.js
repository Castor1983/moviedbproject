import React from 'react';
import {useForm} from "react-hook-form";
import css from "./SerchKeywords.module.css"

const SearchForm = ({setInputText}) => {
    const {register,handleSubmit,reset }=useForm()

    const onSubmit = (search) => {
        setInputText(search);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.SearchForm}>
            <input type = 'text' placeholder= 'search' {...register("example")} />
            <button className={css. SearchBtn}>Search</button>
        </form>
    );
};

export {SearchForm};