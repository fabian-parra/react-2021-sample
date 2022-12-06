const BASE_URL = 'http://localhost:8882'
export const fetchData = path => options => fetch(`${BASE_URL}${path}`, options)
  .then(response => response.json())

export const buildUrl = (path, params) => Object.keys(params).reduce((url, key, index, array) => {
    if(index === 0) url = `${url}?`
    url = `${url}${key}=${params[key]}&`
    if(index === array.length - 1) url = url.slice(0, -1)
    return url
  }, path)
