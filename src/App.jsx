import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Players from './pages/Players'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import Skiper30 from './pages/Gallery'
import Footer from './pages/Footer'

function App() { 
   return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <FullScreenNav/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/achievements' element={<Achievements/>}/>
        <Route path='/players' element={<Players/>}/>
        <Route path='/gallery' element={<Skiper30/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
