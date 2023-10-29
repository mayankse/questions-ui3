"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css'      

import { useReducer } from 'react'
import { appReducer } from './includes/reducer/appReducer'
import {init} from './includes/utils/init'
import { appCtx } from './includes/context/appContext'

export default function RootLayout({ children }) {
  const  [state,dispatch]=useReducer(appReducer,init);
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} >
        <appCtx.Provider value={{state,dispatch}}> 
        {children}
        </appCtx.Provider>
      </body>
    </html>
  )
}
