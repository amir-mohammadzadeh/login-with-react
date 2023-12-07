import './Card.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


//   Backgroung Card componenet
const Card = ({desplay ,onLogin , onSignup , error})=>{
    return(
        <div className={ desplay ?  'back-card' :'back-card justify-end'}>
            {desplay ?<LoginForm onLogin={onLogin} onError={error} /> : <SignupForm onSignup={onSignup} onError={error} /> }
        </div>
    )
}

export default Card