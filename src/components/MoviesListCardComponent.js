import React from 'react';

const MoviesListCardComponent = ({movie}) => {
    const {title} = movie;
    return (
        <div style={{width: '300px'}}>

            <h2>title: {title}</h2>


        </div>
    );
};

export {MoviesListCardComponent};