import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'

function Login(props) {

  const [user, setLogin] = useState('')

  const handleOnChange = (e) => {
    setLogin(e.target.value)
  }
  if (props.showMenu === false) {
    return (
      <div>
        <input onChange={handleOnChange} type="text" />
        <button onClick={() => props.onUserLogin(user)}>Login</button>
      </div>
    )} else {
        return (
          <div>
            <button onClick={() => props.onUserLogout()}>Logout</button>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    showMenu: state.showMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLogin: (loginUser) => dispatch({type: 'LOGIN', user: loginUser}),
    onUserLogout: (logoutUser) => dispatch({type: 'LOGOUT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)