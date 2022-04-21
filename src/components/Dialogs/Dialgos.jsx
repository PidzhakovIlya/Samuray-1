import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialgosItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";

const setActive = navData => navData.isActive ? s.active : s.item;

const Dialogs = (props) => {


    let dialogs = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} img={d.img} />);

    let messages = props.state.messages.map((m) => <Message message={m.message} />);

    let textElement = React.createRef();
    let addText = () => {
        let text = textElement.current.value;
        props.addMessage(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
                <textarea ref={textElement}></textarea>
                <div>
                    <button onClick={addText}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;