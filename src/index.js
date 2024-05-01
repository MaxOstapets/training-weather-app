import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Home } from './Pages/Home/Home';
import  AboutUs  from './Pages/AboutUs/AboutUs';
import Help from './Pages/Help/Help';
import Netflix from './Pages/Netflix/Netflix';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[{
      path: "/:netflix",
      element: <Netflix /> 
    }]
  },

  {
    path: "/help",
    element: <Help />,
  },

  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);