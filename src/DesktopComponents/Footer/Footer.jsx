import stl from './Footer.module.css'


const Footer = ({position , text}) => {
    let footer_class ,icon_class, icon ;
    position == "login" ? (
        footer_class = stl["content-L"] ,
        icon_class = stl["img-L"],
        icon = "icon/google.svg"
        
    ) : (
        footer_class = stl["content-S"] ,
        icon_class = stl["img-S"],
        icon = "icon/google-plus.svg"
    ) ;

    const social_links = [
        { id: 1, link: "#", icon: icon },
        { id: 2, link: "#", icon: "icon/github.svg" },
        { id: 3, link: "#", icon: "icon/linkedin.svg" },
        { id: 4, link: "#", icon: "icon/facebook.svg" },
    ]

    return (
        <footer className={footer_class}>
            <div>
                {text}
            </div>
            <div className={stl["acouns-content"]}>
                {social_links.map(item => (
                    <a href={item.link} key={item.id}>
                        <img src={item.icon} className={icon_class} />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer

/**
 *          <div className="form-social">
                <span> Or login with : </span>
            </div>

            <div className="form-social">
                {
                    social_links.map(item => (
                        <a key={item.id} href={item.link}>
                            <img src={item.icon} />
                        </a>)
                    )
                }
            </div>
 */