import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialgosItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogs = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    let messages = props.state.messages.map((m) => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}

export default Dialogs;