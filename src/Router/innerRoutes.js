import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

const ItemList = React.lazy(() => import('modules/Item/List'))
const OrderList = React.lazy(() => import('modules/Order/List'))

const InnerRoutes = () => {
  const { url } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${url}/item/list`} component={ItemList} />
      <Route path={`${url}/order/list`} component={OrderList} />
      <Route path={`${url}`} component={ItemList} />
    </Switch>
  )
}

export default InnerRoutes
