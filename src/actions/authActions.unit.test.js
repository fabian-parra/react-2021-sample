import { actions } from './authActions'

describe('AuthActions', () => {
  test('siginDispatch', () => {
    const dispatch = jest.fn()
    const { siginDispatch } = actions(dispatch)
    const entries = {
      username: 'test-username',
      name: 'test-name',
      token: 'test-token',
    }
    siginDispatch(entries)

    const actionExpected = {
      type: 'sigin',
      ...entries,
    }
    expect(dispatch).toHaveBeenCalledWith(actionExpected)
  })
})
