import React from 'react'
import styled from 'styled-components'
import { useAuth } from 'providers/authProvider'
import Logout from 'modules/Logout'

const Home = () => {
  const { state } = useAuth()
  return (
    <>
      <Sidebar>Sidebar</Sidebar>
      <Content>
        <ContextualHeader>
          Contextual Header
          <h1>Hello {state.name}, this is your dashboard</h1>
          <Logout />
        </ContextualHeader>
        <MainContent>
          Main content
        </MainContent>
      </Content>
    </>
  )
}

const Sidebar = styled.div`
  width: 12rem;
  padding: 1rem;
  border-right: black solid 1px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContextualHeader = styled.div`
  padding: 2rem 1rem;
  border-bottom: black solid 1px;
`

const MainContent = styled.div`
  height: 100%;
  padding: 2rem;
`

export default Home
