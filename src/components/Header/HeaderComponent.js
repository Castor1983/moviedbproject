import React from 'react';
import css from './HeaderComponent.module.css'
import {UserInfoComponent} from "../UserInfoComponent";
import {FormControlLabel, Switch} from "@mui/material";

const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <p>The MovieDB</p>
            Movies
            Genres
            Search
             <FormControlLabel control={<Switch defaultChecked />} label="Light Theme" />
            <UserInfoComponent/>
        </div>
    );
};

export {HeaderComponent};