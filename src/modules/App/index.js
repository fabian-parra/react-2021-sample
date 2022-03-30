import React from 'react'
import styled from 'styled-components'
import Router from 'Router'
import AuthProvider from 'providers/authProvider'

const App = () => (
  <Main>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </Main>
)

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App
