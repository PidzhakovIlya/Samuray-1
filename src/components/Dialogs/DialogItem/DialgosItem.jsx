import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"

const setActive = navData => navData.isActive ? s.active : s.item;

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.img}{props.name}</NavLink>
    </div>
}

export default DialogItem ;