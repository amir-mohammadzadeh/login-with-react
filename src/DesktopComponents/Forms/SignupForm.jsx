import { useState } from 'react'
import Input from './Input'


const SignupForm = ({ onSignup, onError }) => {
    const [passwordHide, setPasswordHide] = useState(true)
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
        email: "",
        checkbox: true,

    });

    const inputChangeHandler = (event) => {
        const [name, value] = [event.target.name, event.target.value];
        setInputValues({ ...inputValues, [name]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        onSignup(inputValues)
    }

    const userName_input = {
        id: 'username-S',
        type: 'text',
        name: 'username',
        label: "UserName",
        value: inputValues.username,
        onType: inputChangeHandler,
    }
    const password_input = {
        id: 'password-S',
        type: passwordHide ? "password" : "text",
        name: 'password',
        label: "Password",
        value: inputValues.password,
        onType: inputChangeHandler,
    }
    const email_input = {
        id: 'email-S',
        type: 'text',
        name: 'email',
        label: "Email",
        value: inputValues.email,
        onType: inputChangeHandler,
    }
    const Terms_Conditions_link = '#'


    return (
        <form className='lg-form' onSubmit={submitHandler}>
            <Input {...userName_input} >
                <i className="icon icon-user-tie leftIcon" > </i>
            </Input>
            {onError && (
                <div className="error-msg">
                    Username is already taken!
                </div>
            )}
            <Input {...email_input} >
                <i className="icon icon-envelope-at-fill leftIcon" > </i>
            </Input>
            <Input {...password_input} >
                <i className="icon icon-key-fill leftIcon " > </i>
                <span className="icon icon-eye rightIcon " onClick={() => setPasswordHide(!passwordHide)} ></span>
            </Input>
            <div className='checkbox-content'>
                <input id='FormAggre' type='checkbox' className='input-checkbox' name='FormAggre'
                    checked={inputValues.checkbox}
                    onChange={() => setInputValues({ ...inputValues, checkbox: !inputValues.checkbox })}
                />
                <label htmlFor='FormAggre' >
                    I've read and aggre to
                    <a href={Terms_Conditions_link}> Terms & Conditions </a>
                </label>
            </div>

            <div className="form-buttons">
                <button type="submit">
                    Signup
                </button>
            </div>

        </form>
    )
}

export default SignupForm