import { fetchData } from './base'

const ENDPOINT = '/sigin'
const fetchAuth = fetchData(ENDPOINT)

export const authenticateUser = (username, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  }
  return fetchAuth(options)
}
