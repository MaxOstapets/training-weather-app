import NetflixDisplay from "../../Components/Phone/NetflixDisplay/NetflixDisplay";
import Header from '../../Components/Header/Header';
import Descriptor from '../../Components/Descriptor/Descriptor';
import Display from '../../Components/Phone/Display/Display';
import Button from '../../Components/Button/Button';

const Netflix = () => {
    return(
    <>
      <Header />
      
      <div className="Main">
        
        <div className="BtnAndDescriptor">
            <Descriptor />
            <Button />
        </div>
        
        <NetflixDisplay />
      
      </div>
    </>
    )
}

export default Netflix;