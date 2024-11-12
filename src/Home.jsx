import React from 'react'
import Card from './Card'

const Home = () => {
    const phpDescription = 'Php is used for backend development'
    const javascripDescription = 'Javascript is used for frontend development'
    const pythonDescription = 'Python is used for data analysis'
    return (
    <div>
      <h1>Home page</h1>
        <Card language='Javascript' desc={javascripDescription} />
        <Card language='PHP' desc={phpDescription} />
        <Card language='python' desc={pythonDescription} />
    
    </div>
  )
}

export default Home
