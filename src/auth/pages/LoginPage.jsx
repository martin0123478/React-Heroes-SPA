import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const LoginPage = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const onLogin = () => {
    login('Martin')
    navigate('/marvel')
  }
  return (
    <div className='container mt-5'>

      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary'
        onClick={onLogin}>
        Login
      </button>
    </div>
  )
}
