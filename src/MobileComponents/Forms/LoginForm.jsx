import { useState, useContext } from "react"
import { username_input, password_input, checkbox } from './inputs_Property.jsx'
import style from './Forms-Style.module.css'
import Input from "../Input/Input"
import { AppContext } from "../../App.jsx"

const LoginForm = () => {
    const { setDesplay, onLogin, error } = useContext(AppContext)
    const [inputsValue, setInputsValue] = useState({
        username: '',
        password: '',
        checked: false
    })

    const onChangeHandler = (event) => {
        let name, value;
        event.target.type == 'checkbox' ?
            [name, value] = [event.target.name, event.target.checked] :
            [name, value] = [event.target.name, event.target.value];

        setInputsValue({ ...inputsValue, [name]: value })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        onLogin(inputsValue)
    }

    [username_input.value, username_input.onType] = [inputsValue.username, onChangeHandler];
    [password_input.value, password_input.onType] = [inputsValue.password, onChangeHandler];
    [checkbox.value, checkbox.onType] = [inputsValue.checked, onChangeHandler];

    return (
        <form action="" className={style["form"]} onSubmit={onSubmitHandler}>

            <header> Login </header>

            {error &&
                <div className={style['error-msg']}>
                    UserName or Password is not exist!
                </div>
            }
            <Input {...username_input} />
            <Input {...password_input} />
            <Input {...checkbox} > Remember Me </Input>

            <div className={style["form-linkes"]}>
                <button type="submit"> Login </button>
                <div className={style["forgot"]}>
                    <a href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className={style["register"]}>
                    Don't have account ?
                    <a onClick={() => setDesplay(false)}>
                        Signup
                    </a>
                </div>
            </div>
            
        </form>
    )
}

export default LoginForm