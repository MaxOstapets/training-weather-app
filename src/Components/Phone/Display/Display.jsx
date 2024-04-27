import './Display.module.css'
import PhoneHeader from '../PhoneHeader/PhoneHeader'
import Widget from '../Widget/Widget'
import MenuBurger from '../MenuBurger/MenuBurger'
import Icons from '../Icons/Icons'
import styles from './Display.module.css'

const Display = () => {
    return (
        <div id={styles.iphone}>
            <PhoneHeader />
            <Widget />
            <Icons />
            <MenuBurger />
        </div>
    );
}

export default Display;