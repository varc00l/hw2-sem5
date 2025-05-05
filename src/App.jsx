import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Text text="We learn react"/>
    </>
  )
}

export default App
