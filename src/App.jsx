import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header/Header'
import './App.css'
import Shop from './component/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
         <Header></Header>
         <Shop></Shop>
    </div>
  )
}

export default App
