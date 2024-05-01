import './Header.module.css'
import headerStyles from './Header.module.css'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation()

    return(
        <nav className={headerStyles.mainHeader}>
            <ul className={headerStyles.list}>
                <NavLink to={"/"} className={pathname ==="/" ? headerStyles.linkPresent : headerStyles.link}>Home</NavLink>
                <NavLink to={"/aboutus"} className={pathname ==="/aboutus" ? headerStyles.linkPresent : headerStyles.link}>About Us</NavLink>
                <NavLink to={"/help"} className={pathname ==="/help" ? headerStyles.linkPresent : headerStyles.link}>Help</NavLink>
            </ul>
        </nav>
    )
}

export default Header;