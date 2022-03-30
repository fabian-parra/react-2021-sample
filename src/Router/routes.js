import React from 'react'

const Login = React.lazy(() => import('modules/Login'))
const Dashboard = React.lazy(() => import('modules/Dashboard'))

export const routes = [
  {
    path: '/sigin',
    exact: true,
    component: Login,
    isPublic: true,
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    isPublic: false,
  },
]
