import React from 'react'

const Header = () => {
    const welcomeMessage = {
        backgroundColor: 'green',
        color: 'white',
        width: '50%',
        borderRadius : '5px'
    }
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>



      <h1 style={welcomeMessage}>Welcome to our second react class</h1>
    </div>
  )
}

export default Header
