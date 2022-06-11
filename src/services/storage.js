export const save = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export const get = (key, fallbackData = null) => {
  const stringifyData = localStorage.getItem(key)
  if (stringifyData) {
    return JSON.parse(stringifyData)
  }
  return fallbackData
}

export const remove = key => localStorage.removeItem(key)
