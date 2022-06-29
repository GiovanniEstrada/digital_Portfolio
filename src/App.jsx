import React from 'react'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Frameworks from './Components/Frameworks/Frameworks'
import './App.css'

const App = () => {
  return (
    <>
      <div className='div header'>
        <Header></Header>
      </div>
      <div className='div about'>
        <About></About>
      </div>
      <div className='div frameworks'>
        <Frameworks/>
      </div>

    </>
  )
}

export default App