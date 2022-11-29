export const productInitialState = {
  search: null,
  timestamp: Date.now(),
  products: [],
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'search':
      return {
        ...state,
        timestamp: Date.now(),
        search: action.search,
        products: action.products,
      }
    default:
      return { ...state }
  }
}
