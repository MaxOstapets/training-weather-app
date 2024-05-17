import styles from './Display.module.css'
import { Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import NetflixEl from '../NetflixEl/NetfliEl';

const Display = () => {
    return(
        <div id={styles.iphone}>
            <Routes>
                <Route path='/netflix' element={<NetflixEl/>} />
                <Route index element={<Main/>} />
            </Routes>
        </div>
    )
}

export default Display;