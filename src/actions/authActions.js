const siginDispatch = dispatch => ({ username, name, token }) => {
  const action = {
    type: 'sigin',
    token,
    name,
    username,
  }
  return dispatch(action)
}

const sigoutDispatch = dispatch => () => {
  const action = {
    type: 'sigout',
  }
  return dispatch(action)
}

export const actions = dispatch => ({
  siginDispatch: siginDispatch(dispatch),
  sigoutDispatch: sigoutDispatch(dispatch),
})
