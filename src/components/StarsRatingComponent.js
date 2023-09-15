import React from 'react';
import {Rating} from "@mui/material";

const StarsRatingComponent = () => {
    return (
        <div>
            <Rating name="customized-10" defaultValue={2.5} max={10} precision={0.5} readOnly/>
        </div>
    );
};

export {StarsRatingComponent};