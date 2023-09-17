import React from 'react';
import css from './HeaderComponent.module.css'
import {UserInfoComponent} from "../UserInfo/UserInfoComponent";
import {NavLink} from "react-router-dom";
import {AppRoutes} from "../../router/appRoutes";
import {ThemeComponent} from "./ThemeComponent";

const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <h3>The MovieDB</h3>
            <NavLink to={AppRoutes.MOVIESLIST} style={{textDecoration: 'none', color: 'yellow'}}>Movies</NavLink>
            <NavLink to={AppRoutes.GENRELIST} style={{textDecoration: 'none', color: 'yellow'}}>Genres</NavLink>
            <NavLink to={AppRoutes.SEARCH} style={{textDecoration: 'none', color: 'yellow'}}>Search</NavLink>
            <ThemeComponent/>
            <UserInfoComponent/>
        </div>
    );
};

export {HeaderComponent};