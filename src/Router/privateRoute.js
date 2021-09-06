import React from 'react'
import { useAuth } from 'providers/authProvider' 
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children, component: Component, ...props}) => {
  const { state } = useAuth()
  

  return (
    <Route {...props}
      render={({ location }) => 
        state.auth ? 
          children ? 
            children : <Component />
          :
          <Redirect to={{ pathname: '/sigin', state: { from: location } }} />
      }
    />
  )
}

export default PrivateRoute
