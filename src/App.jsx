import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
  
      <ThemeProvider>
        <Home/>
        <About/>
       </ThemeProvider>
  
  )
}

export default App