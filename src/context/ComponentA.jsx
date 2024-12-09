import { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContexts = createContext()

const ComponentA = () => {
    const [user, setUser] = useState('Stella')
  return (
    <div className='box'>
      ComponentA
      <p>Welcome {user}</p>

      <UserContexts.Provider value={user}>
        <ComponentB/>
      </UserContexts.Provider>
      
    </div>
  )
}

export default ComponentA
