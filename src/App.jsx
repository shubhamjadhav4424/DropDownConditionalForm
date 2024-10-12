import { useState } from 'react'
import './App.css'
import Com_with_Accordion from './Com_with_Accordion'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Component2 from './Component2';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Com_with_Accordion/>}/>
      <Route path='/Second' element={<Component2/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
