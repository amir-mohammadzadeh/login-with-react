import { useContext, useState } from "react"
import { username_input, password_input, checkbox, email_input } from './inputs_Property.jsx'
import style from './Forms-Style.module.css'
import Input from "../Input/Input"
import { AppContext } from "../../App.jsx"

const SignupForm = () => {
    
    const {setDesplay , onSignup , error } = useContext(AppContext)
    const [inputsValue, setInputsValue] = useState({
        username: '',
        password: '',
        email: '',
        checked: true
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
        onSignup(inputsValue)
    }

    [email_input.value, email_input.onType] = [inputsValue.email, onChangeHandler];
    [username_input.id, username_input.value, username_input.onType] = ['msuni', inputsValue.username, onChangeHandler];
    [password_input.id, password_input.value, password_input.onType] = ['mspi', inputsValue.password, onChangeHandler];
    [checkbox.id, checkbox.value, checkbox.onType] = ['mschi', inputsValue.checked, onChangeHandler];

    return (
        <form action="" className={style["form"]} onSubmit={onSubmitHandler}>

            <header>  Register  </header>
                
            <Input {...email_input} />

            {error && 
                <div className={style['error-msg']}>
                    UserName is already taken!
                </div>
            }
            <Input {...username_input} />
            <Input {...password_input} />

            <Input {...checkbox} >
                I've read and aggre to
                <a href="#">Terms & Conditions </a>
            </Input>

            <div className={style["form-linkes"]}>
                <button type="submit"> Register </button>
                <div className={style["register"]}>
                    Have an account ?
                    <a onClick={()=>setDesplay(true)}>
                        Login
                    </a>
                </div>
            </div>

        </form>
    )
}

export default SignupForm