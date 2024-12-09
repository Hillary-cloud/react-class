import React from 'react'
import { useContext } from 'react'
import { UserContexts } from './ComponentA'

const ComponentD = () => {
    const user = useContext(UserContexts)
  return (
    <div className='box'>
        ComponentD
        <p>Welcome {user} again</p>
    </div>
  )
}

export default ComponentD