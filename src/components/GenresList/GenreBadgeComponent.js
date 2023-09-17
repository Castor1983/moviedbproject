import React from 'react';
import {NavLink} from "react-router-dom";


const GenreBadgeComponent = ({genre}) => {
    const {id, name}=genre
    return (
        <h2><NavLink to={`/genre/${id}`} style={{textDecoration: 'none', color: 'blue', }}>
            {name}
        </NavLink></h2>

    );
};

export {GenreBadgeComponent};