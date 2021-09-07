import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'providers/authProvider'
import { authenticateUser } from 'services/login'
import Form from 'components/form'

const Login = () => {
  const { siginDispatch } = useAuth()
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()

  const action = (username, password) => {
    setLoading(true)
    authenticateUser(username, password)
    .then(user => {
      siginDispatch(user)
      history.push('/dashboard')
    })
    .finally(() => {
      setLoading(false)
    })
  }
  return (
    isLoading ? <div>Cargando</div> : <Form {...{action}}/>
  )
}

export default Login
