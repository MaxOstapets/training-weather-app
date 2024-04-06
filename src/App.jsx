import './App.css';
import { Header } from './Components/Header/Header';
import { Descriptor } from './Components/Descriptor/Descriptor';
import { Display } from './Components/Phone/Display/Display';
import { Button } from './Components/Button/Button';

function App() {
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

export default App;
