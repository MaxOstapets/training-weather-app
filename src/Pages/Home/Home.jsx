import Header from '../../components/Header/Header';
import Descriptor from '../../components/Descriptor/Descriptor';
import Display from '../../components/Phone/Display/Display';
import Button from '../../components/Button/Button';

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