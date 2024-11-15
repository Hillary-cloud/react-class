import style from './Student.module.css'
import propTypes from 'prop-types'

const Student = ({name,age,image,isStudent}) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <img className={style.profile} src={image} alt="" />
        <h3>{age}</h3>
        {isStudent ? <h2>{name} is a student</h2> :  <h2>{name} is not a student</h2>  }
      </div>
    </div>
  )
}

Student.propTypes = {
    name: propTypes.string,
    image: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Student.defaultProps = {
    name: 'Unknown',
    image: 'https://via.placeholder.com/150',
    age: 0,
    isStudent: false
}

export default Student
