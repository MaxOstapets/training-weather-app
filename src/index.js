import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { Home } from './Pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <div>Hello world</div>,
  },

  {
    path: "/help",
    element: <div>Hello help</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);