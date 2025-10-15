import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import ThemeProvider from './Theme'
import Language from './Language'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        
        <Navbar />
        <Language/>
      </ThemeProvider>
    </>
  )
}

export default App
