import LoginForm from './LoginForm'
import style from './Forms-Style.module.css'
import SignupForm from './SignupForm'

const Card = ({desplay }) => {

    return (
        <div className={style["card"]}>
            {desplay ?<LoginForm /> : <SignupForm /> }
        </div>
    )
}

export default Card