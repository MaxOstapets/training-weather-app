import './Display.css'
import { PhoneHeader } from '../PhoneHeader/PhoneHeader'
import { Widget } from '../Widget/Widget'
import { MenuBurger } from '../MenuBurger/MenuBurger'

export const Display = () => {
    return(
        <div id='iphone'>
            <PhoneHeader />
            <Widget />
            <MenuBurger />
        </div>
    )
}