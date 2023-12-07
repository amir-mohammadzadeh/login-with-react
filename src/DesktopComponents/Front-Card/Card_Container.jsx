

const Card_Container = ({ showThis ,header , body , btnTitle , clickHandler , children }) => {
    
    const switchCard = () => { 
        clickHandler()
    }

    return (
        <div className={showThis ? "front-card_content showThis" : "front-card_content hideThis"}> 
            <div className="lg-fcb-item">
                <header> {header} </header>
                <p> {body} </p>
            </div>

            <div className="lg-fcb-item">
                <button onClick={switchCard}>  {btnTitle}    </button>
            </div>
             {children}
        </div>
    )
}

export default Card_Container