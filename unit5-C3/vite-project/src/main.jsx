import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { DataContextProvider } from './contexts/DataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   
    <AuthContextProvider>
      <DataContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      
      </DataContextProvider>
  
    </AuthContextProvider>
    
    
    
  </React.StrictMode>
)
