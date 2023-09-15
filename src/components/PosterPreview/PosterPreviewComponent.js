import React from 'react';
import css from './PosterPreview.module.css'
import {posterURL} from "../../constants/urls";
const PosterPreviewComponent = ({poster_path}) => {

    return (
        <div className={css.PosterContainer} >
            <img src={`${posterURL}${poster_path}`} className={css.PosterPreview}/>
        </div>
    );
};

export {PosterPreviewComponent};