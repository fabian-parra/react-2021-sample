import React, { useReducer, useMemo } from 'react'
import { authReducer, authInitialState } from 'reducers/authReducer'
import { actions } from 'actions/authActions'

const AuthContext = React.createContext(null)
const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  const authActions = actions(dispatch)
  const contextMemoize = useMemo(() => ({state, ...authActions}), [state])

  return (
    <AuthContext.Provider value={contextMemoize}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthProvider
