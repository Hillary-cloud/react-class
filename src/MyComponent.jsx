import { useState } from 'react'

const MyComponent = () => {
    const [count, setCount ] = useState(0)

    const handleIncrement = () =>{
        setCount(c => c + 1)
    }
    const handleDecrement = () =>{
        setCount(c => c - 1)
    }
    const handleReset = () =>{
        setCount(0)
    }

  return (
    
    <div>
        <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default MyComponent
