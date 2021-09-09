import React, { useState, useMemo } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from 'providers/authProvider'
import { authenticateUser } from 'services/login'
import Form from 'components/form'

const Login = () => {
  const { state, siginDispatch } = useAuth()
  const [isLoading, setLoading] = useState(false)
  const isLoadingMemo = useMemo(() => isLoading, [isLoading])

  const action = useMemo(() => (username, password) => {
    setLoading(true)
    authenticateUser(username, password)
    .then(siginDispatch)
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    isLoadingMemo ? <div>Cargando</div> : 
    state.auth ? <Redirect to='/dashboard' /> :
    <Form {...{action}}/>
  )
}

export default Login
