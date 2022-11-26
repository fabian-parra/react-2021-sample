import React from 'react'

const Login = React.lazy(() => import('modules/Login'))
const Home = React.lazy(() => import('modules/Home'))

export const routes = [
  {
    path: '/sigin',
    exact: true,
    component: Login,
    isPublic: true,
  },
  {
    path: '/vev',
    exact: false,
    component: Home,
    isPublic: false,
  },
]
