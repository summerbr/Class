import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const Login = (props) => {

  const [username, setUsername] = useState('')

  const handleOnChange = (e) => {
    // console.log(e.target.value)
    setUsername(e.target.value)
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={handleOnChange} type="text" />
      <button onClick={() => props.onUserSaved(username)}>Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserSaved: (myUser) => dispatch({type: 'USER_SAVED', username: myUser})
  }
}

export default connect(null,mapDispatchToProps)(Login)