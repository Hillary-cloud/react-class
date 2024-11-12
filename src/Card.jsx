import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <div className="card-body">
            <h3>{props.language}</h3>
            <p>{props.desc}</p>
        </div>
      </div>

      
    </div>
  )
}

export default Card
