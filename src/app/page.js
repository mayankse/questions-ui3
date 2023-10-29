"use client"
import {Header} from './Header'
import {Footer} from './Footer'
import { Question } from './Question'
import { Loader } from './includes/components/Loader'
import { appCtx } from './includes/context/appContext'
import { useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'


const App=()=> {
  const ctxData=useContext(appCtx);
  return (
    <div>
      <Header/>
      <Question/>
      <Footer/>
      {ctxData.state.isShowLoader && <Loader/>}
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    </div>
    
  )
}
export default App;
