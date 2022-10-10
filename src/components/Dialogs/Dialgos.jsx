import React from "react";
import { Navigate } from "react-router-dom";
import AddMessageFormRedux from "./AddMasageForm/AddMasageForm";
import DialogItem from "./DialogItem/DialgosItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";


// const setActive = navData => navData.isActive ? s.active : s.item;

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogs = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);
    let messages = state.messages.map((m) => <Message message={m.message} key={m.id} />);
    // let newMessageText = state.newMessageText;


    const addNewMessage = (values) =>{
        props.addText(values.newMassageBody);
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    };
   
    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogs}
            </div>

            <div className={s.messages}>
                {messages}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
        
    )
}

export default Dialogs;