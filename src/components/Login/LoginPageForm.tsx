import React from "react";
import {Field, reduxForm} from 'redux-form'
import {MaxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../../utils/forms/InputForm/InputForm";

const maxLength30 = MaxLengthCreator(30)

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"}
                       validate={[required, maxLength30]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"}
                       validate={[required, maxLength30]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
            </div>

            {props.error && <div> {props.error} </div>}

            <button>login</button>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)
