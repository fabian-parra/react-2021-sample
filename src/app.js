import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from 'login'

import './cleanUp.less'
import './app.less'

const App = () => {
  const [isLogin, setLogin] = useState(false)
  return (
    <main className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/sigin'>
            <Login {...{setLogin}} />
          </Route>
          <Route path='*'>
            <Redirect to='/sigin' />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  ) 
}

export default App
