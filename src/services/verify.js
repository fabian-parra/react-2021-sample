import { fetchData } from './base'

const ENDPOINT = '/verify'
const fetchVerify = fetchData(ENDPOINT)

export const verifyToken = token => {
  const options = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
  return fetchVerify(options)
}
