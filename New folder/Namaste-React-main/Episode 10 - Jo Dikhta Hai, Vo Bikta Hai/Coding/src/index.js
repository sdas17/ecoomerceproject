import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About';
import Error from './component/Error/Error.js';
import Body from './component/Body';
import AddCart from './component/AddCart.js';

import ResturantMeny from './component/ResturantMeny';
 const Groceery =lazy(()=>import("../src/component/Groceery"))
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
      {
        path:"/Addcart",
        element:<AddCart/>
      },
      {
        path:"/resturantMenu/:resId",
        element:<ResturantMeny/>
      },{
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading .....</h1>}><Groceery />
</Suspense>
      },
     
    ],
    errorElement:<Error/>
   
  },
 

]) 
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);