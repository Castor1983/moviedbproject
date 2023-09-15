import React from 'react';
import {Rating} from "@mui/material";

const StarsRatingComponent = ({vote_average}) => {
    return (
        <div>
            <Rating name="customized-10" defaultValue={vote_average} max={10} precision={0.1} readOnly/>
        </div>
    );
};

export {StarsRatingComponent};