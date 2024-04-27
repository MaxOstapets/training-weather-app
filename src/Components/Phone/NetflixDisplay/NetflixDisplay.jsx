import styles from './NetflixDisplay.module.css'
import PhoneHeader from '../PhoneHeader/PhoneHeader'
import MenuBurger from '../MenuBurger/MenuBurger'

const NetflixDisplay = () => {
    return(
        <div id={styles.iphone}>
            <PhoneHeader />
            <div className={styles.icon}>Hello There</div>
            <MenuBurger />
        </div>
    )
}

export default NetflixDisplay;