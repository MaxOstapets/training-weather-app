import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Home } from './Pages/Home/Home';
import  AboutUs  from './Pages/AboutUs/AboutUs';
import Help from './Pages/Help/Help';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from './Pages/NotFound/NotFound';
import ShopPage from './Pages/Shop/Shop';
import ProductPage from './Pages/Product/Product';

const PagesRouters = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/help' element={<Help />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/products' element={<ShopPage />}/>
        <Route path='/product/:productId' element={<ProductPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <PagesRouters />
  </React.StrictMode>
);