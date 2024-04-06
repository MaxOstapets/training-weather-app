import './Button.module.css'
import ButtonStyle from './Button.module.css'
import { useState } from 'react'

export const Button = () => {
    const [color, setColor] = useState(true)
    
    const changeColor = () => {
        console.log(color);
        setColor(!color)
    }

    return(
        <button className={color == true ? ButtonStyle.CheckWeather : ButtonStyle.ChangedStyle} onClick={changeColor}>Check weather</button>
    )
}