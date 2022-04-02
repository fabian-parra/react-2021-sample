import { authReducer, authInitialState } from './authReducer'

describe('Auth Reducer', () => {
  test('Initial State', () => {
    const expectState = {
      auth: false,
      siginTimestamp: null,
      name: null,
      username: null,
      token: null,
    }
    expect(authInitialState).toEqual(expectState)
  })
  test('Sigin action', () => {
    const timestamp = new Date('2022-04-01T00:00:00.000Z').valueOf()
    jest.spyOn(Date, 'now').mockReturnValue(timestamp)
    const action = {
      type: 'sigin',
      name: 'test-name',
      username: 'test-username',
      token: 'test-token',
    }
    const stateResult = authReducer(authInitialState, action)

    const expectState = {
      auth: true,
      siginTimestamp: timestamp,
      name: action.name,
      username: action.username,
      token: action.token,
    }
    expect(stateResult).toEqual(expectState)
  })
  test('Unknown action', () => {
    const action = {
      type: 'unknown',
    }
    const stateResult = authReducer(authInitialState, action)

    expect(stateResult).toEqual(authInitialState)
  })
})
