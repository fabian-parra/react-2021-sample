const BASE_URL = 'http://localhost:8882'
const AUTH_ENDPOINT = '/sigin'

const fetchData = (url, path) => (options) => fetch(`${url}${path}`, options)
  .then(response => response.json())

const fetchAuth = fetchData(BASE_URL, AUTH_ENDPOINT)

export const authenticateUser = (username, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: { 'Content-Type': 'application/json' }
  }
  return fetchAuth(options)
}
