import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightSwitcher from './CountdownLightSwitch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='LightSwitcher'>
        <LightSwitcher/>
        
       </div> 
       
    </>
  )
}

export default App;
