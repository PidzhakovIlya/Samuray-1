import React from "react"
import { Field } from "redux-form";
import styls from './FormsControl.module.css'


const FormControl = ({ input, meta, children, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styls.formControl + ' ' + (hasError ? styls.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validates, component, props = {}, text) => 
    (        <div> <Field placeholder={placeholder}
            validate={validates}
            name={name}
            component={component}
            {...props}
            /> 
            {text}
        </div>
    );
