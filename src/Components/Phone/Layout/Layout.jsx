import PhoneHeader from '../PhoneHeader/PhoneHeader'
import MenuBurger from '../MenuBurger/MenuBurger'

const Layout = ({children}) => {
    return(
        <>
            <PhoneHeader />
            {children}
            <MenuBurger />
        </>
    )
}

export default Layout;