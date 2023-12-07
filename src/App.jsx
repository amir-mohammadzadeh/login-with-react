import { createContext, useEffect, useState } from 'react'
import './App.css'
import Main from './DesktopComponents/Main'
import Mobile_Main from './MobileComponents/Mobile_Main'
import { screenSizeHandler } from './MediaQuery'

export const AppContext = createContext(null)

function App() {
  const [mobileScreen, setMobileScreen] = useState(false)
  const [desplay, setDesplay] = useState(true)
  const [error, setError] = useState(false)
  const [alert, setAlert] = useState(false)
  const [USERS, setUSERS] = useState([
    { id: 0 , userName: '', password: '', email: '', conditional: '' }
  ])

  useEffect(() => screenSizeHandler(setMobileScreen), [])
  useEffect(() => setError(false), [desplay, alert])

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

  const onSignup = async (Client_Data) => {
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
        setTimeout(() => setAlert(false), 5000)
        return 'signup'
      })
    )
  }

  return (
    <>
      <AppContext.Provider value={{ desplay, setDesplay, onLogin, onSignup, error, alert }} >
        {mobileScreen ? <Mobile_Main /> : <Main />}
      </AppContext.Provider>
    </>
  )
}

export default App