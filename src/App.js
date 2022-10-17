import React from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => toast("welcome to new React app!");
  return (
  <div>
    React boiler plate with redux & React router 
    <br />
    <br />
    <button className='btn' onClick={notify}>toster Notify!</button>
        <ToastContainer />
  </div>
  
   
  )
}

export default App