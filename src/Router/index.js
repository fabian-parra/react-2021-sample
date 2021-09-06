import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './privateRoute' 
import { routes } from './routes' 

const Router = () => {
  const routeComponents = routes.map(({isPublic, ...props}, index) => isPublic ? 
    <Route key={index} {...props} /> : <PrivateRoute key={index} {...props} /> 
  )
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <BrowserRouter>
        <Switch>
          {routeComponents}
          <Route path='*'>
            <Redirect to='/sigin' />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
