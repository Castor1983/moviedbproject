import React from 'react';
import css from './HeaderComponent.module.css'

const HeaderComponent = () => {
    return (
        <div className={css.Header}>
            <p>The MovieDB</p>
            Movies
            Genres
            Search
            Light Theme
            Avatar
        </div>
    );
};

export {HeaderComponent};