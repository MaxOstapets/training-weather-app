import './App.css';
import { Header } from './Components/Header/Header';
import { Descriptor } from './Components/Descriptor/Descriptor';
import { Display } from './Components/Phone/Display/Display';

function App() {
  return (
    <>
      <Header />
      
      <div className="Main">
        <Descriptor />
        <Display />
      </div>
    </>
  )
}

export default App;
