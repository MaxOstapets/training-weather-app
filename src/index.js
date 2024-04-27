import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Home } from './Pages/Home/Home';
import  AboutUs  from './Pages/AboutUs/AboutUs';
import Help from './Pages/Help/Help';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Netflix from './Pages/Netflix/Netflix';

const PagesRouters = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='netflix' element={<Netflix/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='help' element={<Help/>}/>
      </Routes>
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PagesRouters />
  </React.StrictMode>
);