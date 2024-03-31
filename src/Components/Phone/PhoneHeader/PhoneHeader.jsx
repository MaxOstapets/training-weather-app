import './PhoneHeader.css'

export const PhoneHeader = () => {
    return(
        <header className='PhoneHeader'>
            <span className='LogoTitle'>Logo</span>
            <span className="AppTitle">Weather App</span>
            <div className="Icons">
                <span className="MenuBurgerHeader">Brgr</span>
                <span className="Profile">Prfl</span>
            </div>
        </header>
    )
}