import React from 'react';
import css from './HeaderComponent.module.css'
import {UserInfoComponent} from "../UserInfoComponent";
import {FormControlLabel, Switch} from "@mui/material";

const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <h3>The MovieDB</h3>
            <p>Movies</p>
            <p>Genres</p>
            <p>Search</p>
             <FormControlLabel control={<Switch defaultChecked />} label="Light Theme" />
            <UserInfoComponent/>
        </div>
    );
};

export {HeaderComponent};