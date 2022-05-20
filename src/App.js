import React from 'react'
import "react-pro-sidebar/dist/css/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aside from './Components/Aside';
import Welcome from './Components/Welcome';
import Service from './Components/Service';
import Main from './Components/Main';
import "./styles.css";


function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Aside/>
         <Routes>
           <Route path='/' element={<Welcome/>}/>
           <Route path='/dashbord' element={<Main/>}/>
           <Route path='/service' element={<Service/>}/>
         </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
