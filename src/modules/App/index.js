import React, { useReducer } from 'react'
import Routes from 'routes'
import AuthProvider from 'providers/authProvider'

import './style.less'

const App = () => {

  return (
    <main className='app'>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </main>
  ) 
}

export default App
