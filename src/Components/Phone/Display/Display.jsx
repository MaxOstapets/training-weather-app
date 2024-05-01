import styles from './Display.module.css'

const Display = ({children}) => {
    return(
        <div id={styles.iphone}>
            {children}
        </div>
    )
}

export default Display;