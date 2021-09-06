import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'components/form'
import { useAuth } from 'providers/authProvider'

const Login = () => {
  const { siginDispatch } = useAuth()
  const history = useHistory()

  const action = (username, password) => {
    //validate username and password
    siginDispatch()
    history.push('/dashboard')
  }
  return (
    <Form {...{action}}/>
  )
}

export default Login
