import React from 'react'
import { useAuth } from 'providers/authProvider'

const Dashboard = () => {
  const { state } = useAuth()
  return (
    <h1>Hello {state.name}, this is your dashboard</h1>
  )
}

export default Dashboard
