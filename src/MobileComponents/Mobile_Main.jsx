import { useContext } from 'react'
import Card from './Forms/Card'
import './Mobile_Main.css'
import { AppContext } from '../App'
import Toast from '../Toast/Toast'

const Mobile_Main = () => {

    const { desplay, alert } = useContext(AppContext)

    return (
        <main className='main'>
            <div className="main-container">
                <Card desplay={desplay} />
            </div>
            {alert && <Toast msg={alert} />}
        </main>
    )
}

export default Mobile_Main