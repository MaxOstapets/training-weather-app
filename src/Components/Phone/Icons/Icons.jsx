import iconStyle from "./Icons.module.css"

const Icons = ({title = "default"}) => {
    const icons = [
        {icon: "M"},
        {icon: "H"},
        {icon: "F"}
    ]
    
    return(
    
    <ul className={iconStyle.list}>
        {icons.map((el, i) => (
            <li key={i} className={iconStyle.icon}>{el.icon}</li>
        ))
        }
    </ul>
    
    )
}

export default Icons;