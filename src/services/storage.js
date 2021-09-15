export const save = (key, data) => sessionStorage.setItem(key, JSON.stringify(data))

export const get = (key, fallbackData = null) => {
  const stringifyData = sessionStorage.getItem(key)
  if(stringifyData) {
    return JSON.parse(stringifyData)
  }
  return fallbackData
}

export const remove = key => sessionStorage.removeItem(key)
