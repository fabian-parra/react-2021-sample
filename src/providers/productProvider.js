import React, { useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'
import { productReducer, productInitialState } from 'reducers/productReducer'
import { actions } from 'actions/productActions'

const ProductContext = React.createContext(null)

export const useProduct = () => React.useContext(ProductContext)
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, productInitialState)
  const productActions = actions(dispatch)
  const contextMemoize = useMemo(() => ({ state, ...productActions }), [state])
  return (
    <ProductContext.Provider value={contextMemoize}>
      {children}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProductProvider
