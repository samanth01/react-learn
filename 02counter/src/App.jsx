import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(5)
   
  const addValue = ( )=>{
      setCounter(prevCounter => prevCounter+1)
    
  }
  const removeValue =()=>{
    if (counter == 0) {return
      
    }
    else{
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
