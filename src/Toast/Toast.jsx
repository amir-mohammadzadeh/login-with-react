import { useState } from 'react';
import style from './Toast.module.css'

const Toast = ({ msg }) => {

    const [animation, setAnimation] = useState('toast-show')
    let toast_class, text;
    toast_class = [style["toast"], style['success-colors'], style[animation]],

    msg == 'Logedin' ?
        text = 'Wellcome, you have logged in' :
        text = 'Your registration was successful' ;
        
    setTimeout(() => setAnimation('toast-hide'), 5400)

    return (
        <div className={toast_class.join(' ')} >
            <i className={style["toast-icon"]}>&#10004;</i>
            <span className={style["toast-text"]}>
                {text}
            </span>
        </div>
    )
}

export default Toast