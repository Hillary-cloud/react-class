import React, { useEffect } from 'react'

const Event = () => {

    const handleSayHello = (name) => {
        alert(`${name} Say Hello`)
    }

    const handleChangeBtn = (e) => {
        e.target.textContent = "You Just Clicked me"
        e.target.style.backgroundColor = "Red"
        e.target.style.color = "white"
    }
    let count = 0
    const handleCount = () => {
        console.log(count++)
    }
  return (
    <div>
        <button onClick={handleCount}>Count</button>
      <button onClick={() => handleSayHello('jacob')}>SayHello</button>
      <button onClick={(e) => handleChangeBtn(e)}>Click me</button>
    </div>
  )
}

export default Event
