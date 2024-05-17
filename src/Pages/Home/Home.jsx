import Header from '../../Components/Header/Header';
import Descriptor from '../../Components/Descriptor/Descriptor';
import Display from '../../Components/Phone/Display/Display';
import Button from '../../Components/Button/Button';

export const Home = () =>{
  return (
    <>
      <Header />
      
      <div className="Main">
        
        <div className="BtnAndDescriptor">
            <Descriptor />
            <Button />
        </div>
        
        <Display />

      </div>
    </>
  )
}