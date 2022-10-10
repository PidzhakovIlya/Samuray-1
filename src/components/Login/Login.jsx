import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-Reducer";
import { required } from "../../Utils/validators/validators";
import { Input } from "../common/FormsControl/FormsControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                    validate={[required]} name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} validate={[required]} name={'password'} component={Input} type = 'password'/>
            </div>
            <div>
                <Field component={'input'} validate={[required]} name={'rememberMe'} type={"Checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'email' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login( formData.email, formData.password, formData.rememberMe, )
    }
    if(props.isAuth){
        return <Navigate to= {'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps=(state)=>({
    isAuth : state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);
