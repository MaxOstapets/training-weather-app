import './Button.module.css'
import ButtonStyle from './Button.module.css'
import { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Button = () => {
    const [color, setColor] = useState(true)
    const [icon, setIcon] = useState(true)

    const changeColor = () => {
        setColor(!color)
    }

    const changeIcon = () => {
        setIcon(!icon)
    }

    return(
        <button className={color == true ? ButtonStyle.CheckWeather : ButtonStyle.ChangedStyle} onClick={() => {changeColor(); changeIcon()}}>
            Check weather {icon == true ? <FaRegHeart/> : <FaHeart/>}
        </button>
    )
}

export default Button;