import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About';
import Error from '../src/component/Error/Error';
import Body from './component/Body';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/About",
        element:<About/>
      
      },
    ],
    errorElement:<Error/>
   
  },
 

]) 
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




