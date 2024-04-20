import './Header.module.css'
import headerStyles from './Header.module.css'

const Header = () => {
    return(
        <nav className={headerStyles.mainHeader}>
            <ul className={headerStyles.list}>
                <li>Home</li>
                <li>About Us</li>
                <li>Help</li>
            </ul>
        </nav>
    )
}

export default Header;