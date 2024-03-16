import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";



import { HooksApp } from './HooksApp'
import { MainApp } from './09-useContext/MainApp'
import { AboutPage } from './09-useContext/AboutPage';
import { LoginPage } from './09-useContext/LoginPage';
import { HomePage } from './09-useContext/HomePage';

// import  './08-useRecucer/intro-reducer'

import './index.css'



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "about",
                element:<AboutPage/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "*",
                element: <Navigate to="/" replace/>
            }
        ]
    },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}

    <RouterProvider router={router} />



  </React.StrictMode>,
)
