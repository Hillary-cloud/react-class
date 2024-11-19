import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState('red')
  return (
    <div>
        <h2>Color Picker</h2>

        <p style={{backgroundColor: color}}>Text</p>
      <input type="color" value={color}  onChange={(e) => setColor(e.target.value)}/>
    </div>
  )
}

export default ColorPicker
