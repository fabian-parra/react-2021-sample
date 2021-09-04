import React, { useReducer } from 'react'
import { authReducer, authInitialState } from 'reducers/authReducer'
import { actions } from 'actions/authActions'

const AuthContext = React.createContext(null)
const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  const authActions = actions(dispatch)

  return (
    <AuthContext.Provider value={{state, ...authActions}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthProvider
