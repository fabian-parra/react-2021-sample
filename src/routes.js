import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from 'modules/Login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/sigin'>
          <Login />
        </Route>
        <Route path='*'>
          <Redirect to='/sigin' />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
