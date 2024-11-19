import { useState } from 'react'

const MyComponent = () => {
    const [count, setCount ] = useState(0)
    const [isStudent, setIsStudent] = useState(false)
    const [isVisible, setIsVisisble] = useState(false)

    const handleIncrement = () =>{
        setCount(c => c + 1)
    }
    const handleDecrement = () =>{
        setCount(c => c - 1)
    }
    const handleReset = () =>{
        setCount(0)
    }
    const handleToggle = () => {
      setIsStudent(!isStudent)
    }

  return (
    
    <div>
        <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <h2>Is hE a student?</h2>
    {
      isStudent ? <p>Yes</p> : <p>No</p>
    }
      <button onClick={handleToggle}>ToggleYesNo</button><br />
      {isVisible && <p>THIS IS THE TEXT</p> }
      <button onClick={() => setIsVisisble(!isVisible)}>{isVisible ? 'Hide' : 'Show'} Text</button>
    </div>
  )
}

export default MyComponent
