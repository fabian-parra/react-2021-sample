import { authenticateUser } from './login'

describe('Login Service', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.restoreAllMocks()
    delete global.fetch
  })

  test('authenticateUser', () => {
    const user = 'test-user'
    const password = 'test-pass'
    global.fetch.mockResolvedValue({ json: () => 'token' })

    return authenticateUser(user, password).then(result => {
      expect(result).toBe('token')
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:8882/sigin', {
        method: 'POST',
        body: JSON.stringify({ username: user, password }),
        headers: { 'Content-Type': 'application/json' },
      })
    })
  })
})
