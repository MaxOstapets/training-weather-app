import './Header.module.css'
import headerStyles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(

        <nav className={headerStyles.mainHeader}>
            <ul className={headerStyles.list}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/aboutus"}>About Us</NavLink>
                <NavLink to={"/help"}>Help</NavLink>
            </ul>
        </nav>
    )
}

export default Header;