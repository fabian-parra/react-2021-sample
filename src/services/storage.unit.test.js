import { save, get, remove } from './storage'

describe('Storage service', () => {
  let storageOrig
  beforeEach(() => {
    storageOrig = global.localStorage
    delete global.localStorage
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
    }
  })

  afterEach(() => {
    jest.restoreAllMocks()
    global.localStorage = storageOrig
  })

  test('save', () => {
    const key = 'test-key'
    const data = { a: 1 }
    save(key, data)

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(data))
  })
  test('get existed key', () => {
    const dataStringify = JSON.stringify({ a: 1 })
    const key = 'test-key'
    localStorage.getItem.mockReturnValue(dataStringify)

    const data = get(key)

    expect(localStorage.getItem).toHaveBeenCalledWith(key)
    expect(data).toEqual(JSON.parse(dataStringify))
  })
  test('get not existed key', () => {
    const key = 'test-key'
    localStorage.getItem.mockReturnValue(undefined)

    const data = get(key)

    expect(localStorage.getItem).toHaveBeenCalledWith(key)
    expect(data).toBeNull()
  })
  test('remove', () => {
    const key = 'test-key'
    remove(key)

    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })
})
