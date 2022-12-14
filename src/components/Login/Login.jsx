import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-Reducer";
import { required } from "../../Utils/validators/validators";
import { Input } from "../common/FormsControl/FormsControl";
import style from "../common/FormsControl/FormsControl.module.css"

const LoginForm = (props) => {
    const { handleSubmit, error, captchaUrl } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <div>
                    <Field placeholder={"Email"} validate={[required]} name={'email'} component={Input} />
                </div>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <div>
                    <Field placeholder={"Password"} validate={[required]} name={'password'} component={Input} type='password' />
                </div>
            </div>
            <div>
                <Field component={'input'} validate={[]} name={'rememberMe'} type="Checkbox" /> remember me
            </div>
            {captchaUrl && <img src = {captchaUrl}/>}
            {captchaUrl &&  <Field placeholder={"Sinbols from image"} validate={[required]} name={'captcha'} component={Input} />}
            {error && <div className={style.formSummeryError}>
                {error}
             </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha,)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl = {props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);
