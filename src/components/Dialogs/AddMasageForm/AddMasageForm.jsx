import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../Utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";

const maxLength50= maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength50]} name='newMassageBody' placeholder='Enter your message' />
            <div><button>Send</button></div>

        </form>
    )
};
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default AddMessageFormRedux;