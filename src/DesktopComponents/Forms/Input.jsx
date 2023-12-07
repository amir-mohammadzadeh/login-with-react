

const Input = ({ id, type, name, label ,value ,onType, children }) => {

    return (
        <div className='input-Box'>
            <input
                id={id}
                className='input'
                name={name}
                type={type}      
                required 
                value={value}
                onChange={onType}
                />

            <label className={type == "checkbox" ? '' : 'label'} htmlFor={id}> {label} </label>
            {children}
        </div>
    )
}

export default Input