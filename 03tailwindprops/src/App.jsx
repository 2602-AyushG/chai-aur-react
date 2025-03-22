import { useState } from 'react'
import Card from './components/card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'XYZ',
    age: 20
  }
  let newArr = [1,2,3,4,5];
  return (
    <>
      <Card channel="Ayush Gupta" var={myObj} Arrray = {newArr}/>
      <Card />
    </>
  )
}

export default App
