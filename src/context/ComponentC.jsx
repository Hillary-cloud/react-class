import React, { useContext } from 'react'
import ComponentD from './ComponentD'
import { UserContexts } from './ComponentA'


const ComponentC = () => {
    const result = useContext(UserContexts)
  return (
    <div className='box'>
      ComponentC
      <h2>{result} once again</h2>
      <ComponentD/>
    </div>
  )
}

export default ComponentC
