import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'


function App() {

  return ( 
  
    <BrowserRouter basename="/Portfolio/">
     <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      {/* <Footer/> */}
      </>
    </BrowserRouter>
    

    
  )
}

export default App
