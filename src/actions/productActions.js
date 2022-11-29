const searchDispatch = dispatch => ({ search, products }) => {
  const action = {
    type: 'search',
    search,
    products,
  }
  return dispatch(action)
}

export const actions = dispatch => ({
  searchDispatch: searchDispatch(dispatch),
})
