import { useState } from 'react'
import style from './Input.module.css'


const Input = ({ id, type, name, children, value, onType, leftIcon, rightIcon }) => {

    const [showPass, setShowPass] = useState(false)
    showPass && (type = 'text', rightIcon = 'icon icon-eye-slash');

    return (

        <div className={type == 'checkbox' ? style["input-checkbox"] : style["input-box"]}>

            {type == 'checkbox' && <input id={id} name={name} type={type}  checked={value} onChange={onType} />}
            {type != 'checkbox' && <input dir='auto' id={id} name={name} type={type} required value={value} onChange={onType} />}

            <label htmlFor={id}> {children} </label>
            {leftIcon &&
                (<i className={[leftIcon, style['leftIcon']].join(' ')}></i>)
            }
            {rightIcon &&
                (<span className={[rightIcon, style['rightIcon']].join(' ')} onClick={() => setShowPass(!showPass)}></span>)
            }
        </div>

    )
}

export default Input



/**
 * <div className={type == 'checkbox' ? style["input-checkbox"] : style["input-box"]}>
            <input id={id} name={name} type={type} required value={value} onChange={onType} />
            <label htmlFor={id}> {label} </label>
            {leftIcon &&
                (<i className={[leftIcon, style['leftIcon']].join(' ')}></i>)
            }
            {rightIcon &&
                (<span className={[rightIcon, style['rightIcon']].join(' ')} onClick={() => setShowPass(!showPass)}></span>)
            }
        </div>
 */

