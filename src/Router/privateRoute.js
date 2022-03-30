import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from 'providers/authProvider'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, path, exact }) => {
  const { state } = useAuth()
  const props = { path, exact }

  return (
    <Route
      {...props}
      render={({ location }) => state.auth
        ? <Component />
        : <Redirect to={{ pathname: '/sigin', state: { from: location } }} />}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
}

export default PrivateRoute
