import React, { useState } from 'react'
import { useAuth } from 'providers/authProvider'
import { expireUser } from 'services/logout'
import Button from 'components/button'

const Logout = () => {
  const [isLoading, setLoading] = useState(false)
  const { state, sigoutDispatch } = useAuth()

  const onSubmit = event => {
    event.preventDefault()
    setLoading(true)
    expireUser(state.token)
      .then(sigoutDispatch)
  }

  const props = {
    value: isLoading ? 'Cerrando sesión' : 'Cerrar sesión',
    disabled: isLoading,
  }

  return (
    <form onSubmit={onSubmit}>
      <Button {...props} />
    </form>
  )
}

export default Logout
