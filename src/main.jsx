import React from 'react'
/* import ReactDOM from 'react-dom/client' */
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'


import './index.css'

import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
     errorElement: <Error />,
   },

  /* {
    path: "/prueba",
    element: <Prueba />,
  }, */

 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );

