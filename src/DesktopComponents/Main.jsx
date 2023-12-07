import { useState , useEffect } from 'react'
import stl from './Main.module.css'
import Card from './Forms/Card';
import FrontCard from './Front-Card/FrontCard';
import Toast from '../Toast/Toast';

const Main = () => {
    const [loginTitle, setTitle] = useState(true)
    const [error, setError] = useState(false)
    const [alert, setAlert] = useState(false)
    const [USERS, setUSERS] = useState([
        { id: 0 , userName: '', password: '', email: '', conditional: '' }
      ])

    let [styleL, styleS] = [[stl.title, stl.pL], [stl.title, stl.pS]];
    loginTitle ? styleS.push(stl.godown) : styleL.push(stl.godown);
    useEffect(() => setError(false), [loginTitle, alert])

    const onSwitch = () => {
        setError(false)
        setTimeout(() => { setTitle(!loginTitle) }, 20)
    }

    const onLogin = (Client_Data) => {
        const match = USERS.some(user => {
            if (Client_Data.username == user.userName && Client_Data.password == user.password) {
              return true
            } else return false
          })
      
          match ? (
            setAlert(() => {
              setTimeout(() => setAlert(false), 6000)
              return 'Logedin'
            })
          ) : setError(true)
    }

    const onSignup = (Client_Data) => {
        const postUserData = ()=>{
            const newUser = {
              id: USERS.length + 1,
              userName: Client_Data.username,
              password: Client_Data.password,
              email: Client_Data.email,
              conditional: Client_Data.checked ? 'Aggre' : 'Rejection'
            }
            setUSERS([...USERS , newUser])
          }
      
          const match = USERS.some(user => {
            if (Client_Data.username == user.userName) { return true } else return false
          })
      
          match ? setError(true) : (
            postUserData(),
            setAlert(() => {
              setTimeout(() => setAlert(false), 6000)
              return 'signup'
            })
          )
    }

    return (
        <main className={stl.main}>
            <div className={stl['main-container']}>
                <div className={styleL.join(" ")} > Login  </div>
                <div className={styleS.join(" ")} >SignUp</div>

                <Card desplay={loginTitle} onLogin={onLogin} onSignup={onSignup} error={error} />
                <FrontCard onSwitchClick={onSwitch} />
            </div>
            {alert && <Toast type={alert}  />}
        </main>
    )
}

export default Main

/**
 * fetch('https://amir-mohammadzadeh.github.io/DataBase/Users.json' ) //   'https://amir-mohammadzadeh.github.io/DataBase/Users.json' 
        .then( (response) => {
            //
            return response.json()
        } )
        .then( data => {
            console.log(data[0])
        })
 */