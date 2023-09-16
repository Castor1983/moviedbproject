import React from 'react';
import {NavLink} from "react-router-dom";


const GenreBadgeComponent = ({genre}) => {
    const {id, name}=genre
    return (
        <NavLink to={`/genre/${id}`} style={{textDecoration: 'none', color: 'yellow'}}>
            {genre.name}
        </NavLink>
    );
};

export {GenreBadgeComponent};