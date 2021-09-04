const siginDispatch = (dispatch) => () => {
  const action = {
    type: 'sigin'
  }
  return dispatch(action)
}

export const actions = (dispatch) => ({
  siginDispatch: siginDispatch(dispatch)
})
