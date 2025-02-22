import {
    createBrowserRouter,

  } from "react-router-dom";

import Main from "../Layout/Main";
import About from "../About/About"
import Home from "../Home/Home";
import Contact from './../Contact';
 
  
  export const router = createBrowserRouter([
 
    {
      path: "/",
      element: <Main/>,
      children:  [

        {
            path: '/',
            element: <Home></Home>
        },

        {
            path: 'about',
            element: <About/>
        },

        {
            path:'contact',
            element: <Contact/>
        }

      ]
    },
  ]);