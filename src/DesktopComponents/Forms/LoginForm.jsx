import { useState } from 'react'
import Input from './Input'
import Footer from '../Footer/Footer'





const LoginForm = ({ onLogin, onError }) => {
    const [passwordHide, setPasswordHide] = useState(true)
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
        checkbox: false,

    });

    const inputChangeHandler = (event) => {
        const [name, value] = [event.target.name, event.target.value];
        setInputValues({ ...inputValues, [name]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        onLogin(inputValues)
        //console.log(inputValues)

    }

    const userName_input = {
        id: 'username-L',
        type: 'text',
        name: 'username',
        label: "UserName",
        value: inputValues.username,
        onType: inputChangeHandler,
    }
    const password_input = {
        id: 'password-L',
        type: passwordHide ? "password" : "text",
        name: 'password',
        label: "Password",
        value: inputValues.password,
        onType: inputChangeHandler,
    }


    return (
        <form className="lg-form" onSubmit={submitHandler}>
            {onError && (
                <div className="error-msg">
                    UserName or Password is not exist!
                </div>
            )}
            <Input {...userName_input} >
                <i className="icon icon-user-tie leftIcon" > </i>

            </Input>
            <Input {...password_input} >
                <i className="icon icon-key-fill leftIcon " > </i>
                <span className="icon icon-eye rightIcon " onClick={() => setPasswordHide(!passwordHide)} ></span>
            </Input>
            <div className='checkbox-content'>
                <input id='rememberme' type='checkbox' className='input-checkbox' name='rememberme'
                    checked={inputValues.checkbox}
                    onChange={() => setInputValues({ ...inputValues, checkbox: !inputValues.checkbox })}
                />
                <label htmlFor='rememberme' > Remember Me </label>
            </div>

            <div className="form-buttons">
                <button type="submit">
                    LOGIN
                </button>
                <div className="forgotPass">
                    <a href="">
                        Forgot Password?
                    </a>
                </div>
            </div>

            <hr className='line' />

            <Footer position={'login'} text={'Or login with :'} />
        </form>
    )
}

export default LoginForm