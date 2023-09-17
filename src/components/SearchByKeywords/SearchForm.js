import React from 'react';
import {useForm} from "react-hook-form";

const SearchForm = ({setInputText}) => {
    const {register,handleSubmit,reset }=useForm()


    const onSubmit = (search) => {
        setInputText(search);
        reset()
    }




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type = 'text' placeholder= 'search' {...register("example")} />
            <button>Search</button>
        </form>
    );
};

export {SearchForm};