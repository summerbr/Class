const initialState = {
  // isAuthenticated: false,
  user: '',
  showMenu: false,
}

const reducer = (state = initialState, action) => {
  if(action.type === 'LOGIN') {
    return {
      ...state,
      user: action.user,
      showMenu: true
    }
  }
  else if(action.type === 'LOGOUT') {
    return {
      ...state,
      user: action.user,
      showMenu: false   //will it default to initial if not specified?
    }
  }
  return state
}

export default reducer