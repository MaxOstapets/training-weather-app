import './Display.module.css'
import PhoneHeader from '../PhoneHeader/PhoneHeader'
import Widget from '../Widget/Widget'
import MenuBurger from '../MenuBurger/MenuBurger'
import Icons from '../Icons/Icons'
import styles from './Display.module.css'

const Icon = ({title = "def"}) => {
    return <li className={styles.icon}>
        {title}
    </li>
}

const Display = () => {
    const iconData = [
        { title: "Icon 1" },
        { title: "Icon 2" },
        { title: "Icon 3" }
    ];

    return (
        <div id={styles.iphone}>
            <PhoneHeader />
            <Widget />
            <div className="icons">
                <ul className={styles.list}>
                    {iconData.map((icon, index) => (
                        <Icon key={index} title={icon.title} />
                    ))}
                </ul>
            </div>
            <MenuBurger />
        </div>
    );
}

export default Display;