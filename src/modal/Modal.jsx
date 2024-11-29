import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`${formData.name} added successfully`)
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }

    const handleClickOutside = (e) => {
        if(e.target.classList.contains("modal-overlay")){
            setShowModal(false)
        }
    }

  return (
    <div>
      <button className='primary-btn' onClick={() => setShowModal(true)}>Add User</button>
      {showModal &&
      <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal">
            <div className="modal-header">
                <h2>Add User</h2>
                <button className='close-btn' onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <form className='modal-body' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData((f) => ({...f, name: e.target.value}))} id='name' placeholder='Enter name' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData((f) => ({...f, email: e.target.value}))} id='email' placeholder='Enter Email' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={formData.password} onChange={(e) => setFormData((f) => ({...f, password: e.target.value}))}  id='password' placeholder='Enter Password' required/>
                </div>
                <button className='primary-btn' type='submit'>Submit</button>
            </form>
        </div>
      </div>
      }
    </div>
  )
}

export default Modal
