import { useState } from 'react'
import { Routes, Route } from "react-router-dom";


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import './assets/css/Fonts.css'



import Home from './pages/home/home'
import Contact from './pages/contact/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>    

  )
}

export default App
