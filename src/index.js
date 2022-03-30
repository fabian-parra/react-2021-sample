import { render } from 'react-dom'
import React from 'react'
import GlobalStyle from 'styles/globalStyle'
import App from 'modules/App'

render((
  <>
    <GlobalStyle />
    <App />
  </>), document.getElementById('root'))
