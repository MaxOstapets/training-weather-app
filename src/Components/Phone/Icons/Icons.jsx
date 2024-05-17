import iconStyle from "./Icons.module.css"
import { NavLink } from "react-router-dom";

const Icons = () => {
    return(
    <>
        <ul className={iconStyle.list}>
            <NavLink className={iconStyle.icon} to={'/netflix'}>I1</NavLink>
            <NavLink className={iconStyle.icon} to={'/game'}>I2</NavLink>
            <NavLink className={iconStyle.icon} to={'/music'}>I3</NavLink>
        </ul>
    </>
    )
}

export default Icons;