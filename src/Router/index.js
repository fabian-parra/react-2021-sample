import React, { Suspense } from 'react'
import {
  BrowserRouter, Switch, Route, Redirect, useRouteMatch,
} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const Login = React.lazy(() => import('modules/Login'))
const Home = React.lazy(() => import('modules/Home'))
const ItemList = React.lazy(() => import('modules/Item/List'))
const OrderList = React.lazy(() => import('modules/Order/List'))

export const Router = () => (
  <Suspense fallback={<div>Cargando Home...</div>}>
    <BrowserRouter>
      <Switch>
        <Route path="/sigin" component={Login} exact />
        <ProtectedRoute path="/vev" component={Home} exact={false} />
        <Route path="*">
          <Redirect to="/sigin" />
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export const InnerRoutes = () => {
  const { url } = useRouteMatch()
  return (
    <Suspense fallback={<div>Cargando Path...</div>}>
      <Switch>
        <Route path={`${url}/item/list`} component={ItemList} />
        <Route path={`${url}/order/list`} component={OrderList} />
        <Route path={`${url}`} component={ItemList} />
      </Switch>
    </Suspense>
  )
}
