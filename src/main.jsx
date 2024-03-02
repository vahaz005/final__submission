import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider, Appcontext } from './components/Appcontext.jsx'
import {  Router } from 'react-router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AppProvider>
  <App/>

</AppProvider>


   
  </React.StrictMode>,
)
