import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null
}

const login = (state, action) => {
  return { ...state, token: 'notNull' }
}
const logout = (state, action) => {
  return { ...state, token: null }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return login(state, action)
    case actionTypes.LOGOUT:
      return logout(state, action)
    default:
      return state
  }
}

export default reducer
