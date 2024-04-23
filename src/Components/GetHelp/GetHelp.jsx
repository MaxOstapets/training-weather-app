import Header from "../Header/Header";
import stylesHelp from './GetHelp.module.css'

const GetHelp = () => {
    return(
        <>
            <Header />
            <span className={stylesHelp.info}>
                По допомогу можна звернутися за номером телефона: 0956120303
            </span>
        </>
    )

}

export default GetHelp;