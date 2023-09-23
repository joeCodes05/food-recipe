import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/home/home'
import './assets/sass/index.scss'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Homepage /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App