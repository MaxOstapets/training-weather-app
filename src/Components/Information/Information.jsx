import styleInfo from "./Information.module.css"
import Header from "../Header/Header";

const Information = () => {
    return(
        <>
            <Header />
            <div className={styleInfo.info}>
                <h1 className={styleInfo.title}>Weather App</h1>
                <span className={styleInfo.deepInfo}>На цьому сайті ви зможете отримати докладну інформацію про погодні умови в будь-якому місці світу. 
                Ви можете переглядати поточну температуру, прогноз на кілька днів, 
                а також деталізовані показники, такі як вітер, вологість, атмосферний тиск та інші метеорологічні параметри.</span>
            </div>
        </>
    )
}

export default Information;