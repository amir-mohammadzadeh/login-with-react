
export const screenSizeHandler = ( setMobileScreen ) => {

    const sizeInMobile = () => {
        if (window.innerWidth >= 777) {
            setMobileScreen(() => {
                window.removeEventListener('resize', sizeInMobile)
                window.addEventListener('resize', sizeInDesktop)
                return false
            })
        }
    }
    const sizeInDesktop = () => {
        if (window.innerWidth <= 777) {
            setMobileScreen(() => {
                window.removeEventListener('resize', sizeInDesktop)
                window.addEventListener('resize', sizeInMobile)
                return true
            })
        }
    }

    window.innerWidth < 777 ? (
        window.addEventListener('resize', sizeInMobile),
        setMobileScreen(true)
    ) : (
        window.addEventListener('resize', sizeInDesktop)
    );

}

