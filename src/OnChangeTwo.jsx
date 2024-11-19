import React, { useState } from 'react'

const OnChangeTwo = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        quantity: '' 
    })
  return (
    <div>
      <div>
        <p>{values.name}</p>
        <input type="text" value={values.name} onChange={(e) => setValues((prevValues) => ({...prevValues, name: e.target.value}))}/>
      </div>
      <div>
        <p>{values.email}</p>
        <input type="email" value={values.email} onChange={(e) => setValues((v) => ({...v, email: e.target.value}))} />
      </div>
      <div>
        <p>{values.quantity}</p>
        <input type="number" value={values.quantity} onChange={(e) => setValues((v) => ({...v, quantity: parseInt(e.target.value)}))}/>
      </div>
    </div>
  )
}

export default OnChangeTwo
