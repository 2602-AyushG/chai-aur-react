import { useState } from 'react'// isse hee hook aata hai 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15);// to update counter in UI
  //let counter = 5;

  const addValue = () => {
    console.log("clicked", counter);
    //counter = counter + 1;
    setcounter(counter + 1);
  }
  const removeValue = () => {
    if(counter > 0) setcounter(counter - 1);
    else setcounter(0);
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}>Add the value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove the value {counter}</button>
    </>
  )
}

export default App
