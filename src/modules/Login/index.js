import React from 'react'
import { useAuth } from 'providers/authProvider'

import './style.less'

const Login = () => {
  const { siginDispatch } = useAuth()
  const handleSubmit = (event) => {
    event.preventDefault()
    siginDispatch()
  }
  return (
    <form className='login' onSubmit={handleSubmit} >
      <h1>Identificate en la aplicaci&oacute;n</h1>
      <input type='text' placeholder='nombre de usuario' />
      <input type='password' placeholder='contraseña' />
      <input type='submit' value='Ingresar' />
    </form>
  )
}

export default Login
