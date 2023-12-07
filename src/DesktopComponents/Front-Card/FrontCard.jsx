import './FrontCard.css'
import Card_Container from './Card_Container'
import Footer from '../Footer/Footer'
import { useState } from 'react'


const FrontCard = ({ onSwitchClick }) => {
    const [preview , setPreview ] = useState(true)
    const switchHandle = () =>{
        setPreview(()=>{
            onSwitchClick()
            return !preview
        })
    }

    
    const LoginSide = {
        showThis : preview ,
        header: "Hello Friend!",
        body: "Enter your Personal details and start a journey with us ",
        btnTitle: "Sign up",
        clickHandler: switchHandle ,
    }
    const SignupSide = {
        showThis : !preview ,
        header: "Wellcome Back!",
        body: "To keep connected with us please login with our personal info. ",
        btnTitle: "Sign in ",
        clickHandler: switchHandle ,
    }
    

    return (
        <div className={preview ? "front-card" : "front-card swipeLeft" }>
            <Card_Container {...LoginSide} /> 
            <Card_Container {...SignupSide} >
                <hr className="line-2" />

                <Footer position={'signup'} text={'Or sign in with :'} />
            </Card_Container>
        </div>
    )
}

export default FrontCard