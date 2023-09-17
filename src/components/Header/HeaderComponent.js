import React from 'react';
import css from './HeaderComponent.module.css'
import {UserInfoComponent} from "../UserInfoComponent";
import {FormControlLabel, Switch} from "@mui/material";
import {NavLink} from "react-router-dom";
import {AppRoutes} from "../../router/appRoutes";

const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <h3>The MovieDB</h3>
            <NavLink to={AppRoutes.MOVIESLIST} style={{textDecoration: 'none', color: 'yellow'}}>Movies</NavLink>
            <NavLink to={AppRoutes.GENRELIST} style={{textDecoration: 'none', color: 'yellow'}}>Genres</NavLink>
            <NavLink to={AppRoutes.SEARCH} style={{textDecoration: 'none', color: 'yellow'}}>Search</NavLink>

             <FormControlLabel control={<Switch defaultChecked />} label="Light Theme" />
            <UserInfoComponent/>
        </div>
    );
};

export {HeaderComponent};