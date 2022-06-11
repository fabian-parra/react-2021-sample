import { fetchData } from './base'

const ENDPOINT = '/sigout'
const fetchAuth = fetchData(ENDPOINT)

export const expireUser = token => {
  const options = {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }
  return fetchAuth(options)
}
