import React from 'react';
import {Avatar} from "@mui/material";
import css from "./UserInfo.module.css"

const UserInfoComponent = () => {
    return (
        <div className={css.UserInfo}>
            Noname
            <Avatar alt="Noname User" src="/static/images/avatar/1.jpg" />
            User
        </div>
    );
};

export {UserInfoComponent};