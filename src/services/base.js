const BASE_URL = 'http://localhost:8882'
export const fetchData = path => options => fetch(`${BASE_URL}${path}`, options)
  .then(response => response.json())
