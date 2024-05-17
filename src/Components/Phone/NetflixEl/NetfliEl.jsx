import style from './Netflix.module.css'
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';

const NetflixEl = () => {
    return(
        <>
            <Layout>
                <div className={style.netflix}>NETFLIX</div>
                <NavLink to={'/'} className={style.back}>BACK</NavLink>
            </Layout>
        </>
    )
}

export default NetflixEl;