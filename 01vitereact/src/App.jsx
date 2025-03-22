import Chai from './chai.jsx'

function App() {
  const userName = "chaiii";
  return (
    //fragmant- taaki multiple elements ko ek mai wrap krr sake because jsx dont allows multiple elements
    <>
    <Chai/>
    <h1>chai aur react {userName}</h1>
    <p>test para</p>
    </>
  )
}

export default App
