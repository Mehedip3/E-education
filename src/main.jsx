import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 

import { BrowserRouter } from 'react-router'


import Main from './components/Layout/Main'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>

  <Main />


  </BrowserRouter>
    
   
    
  </StrictMode>,
)
