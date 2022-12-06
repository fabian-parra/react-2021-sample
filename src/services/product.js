import { fetchData, buildUrl } from './base'

const ENDPOINT = '/products'
const fetchProducts = params => fetchData(buildUrl(ENDPOINT, params))

export const getProducts = (search, token) => {
  const options = {
    method: 'GET',
    headers: { 
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
    }
  }
  return fetchProducts(search)(options)
}
