import React, {
  useState, useReducer, useMemo, useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { authReducer, authInitialState } from 'reducers/authReducer'
import { actions } from 'actions/authActions'
import { save, get, remove } from 'services/storage'
import { verifyToken } from 'services/verify'

const AuthContext = React.createContext(null)
const AuthProvider = ({ children }) => {
  const token = get('accessToken')
  const [verify, setVerify] = useState(false)
  const [state, dispatch] = useReducer(authReducer, authInitialState)
  const authActions = actions(dispatch)
  const contextMemoize = useMemo(() => ({ state, ...authActions }), [state])
  useEffect(() => {
    save('accessToken', state.token)
  }, [state.token])
  useEffect(() => {
    if (token) {
      verifyToken(token)
        .then(user => {
          contextMemoize.siginDispatch(user)
        })
        .catch(() => {
          remove('accessToken')
        })
        .finally(() => setVerify(true))
    } else {
      setVerify(true)
    }
  }, [])

  return (
    verify
      ? (
        <AuthContext.Provider value={contextMemoize}>
          {children}
        </AuthContext.Provider>
      )
      : <div>Cargando...</div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => React.useContext(AuthContext)

export default AuthProvider
