import Header from '../../Components/Header/Header';
import Descriptor from '../../Components/Descriptor/Descriptor';
import Display from '../../Components/Phone/Display/Display';
import MenuBurger from "../../Components/Phone/MenuBurger/MenuBurger";
import PhoneHeader from "../../Components/Phone/PhoneHeader/PhoneHeader";
import Icons from '../../Components/Phone/Icons/Icons'
import Button from '../../Components/Button/Button';
import Widget from '../../Components/Phone/Widget/Widget';

export const Home = () =>{
  return (
    <>
      <Header />
      
      <div className="Main">
        
        <div className="BtnAndDescriptor">
            <Descriptor />
            <Button />
        </div>
        
        <Display>
            <PhoneHeader />
            <Widget />
            <Icons />
            <MenuBurger />
        </Display>

      </div>
    </>
  )
}