import React from 'react'
import {connect} from 'react-redux'

function FancyCounter(props) {
  return (
    <div>
      <h1>Fancy Counter</h1>
      <h3>{props.cat} { props.user != '' ? '- ' + props.user : null }</h3> 
      <button onClick = {() => props.onIncrementCat()}>Increment</button>
      <button onClick = {() => props.onDecrementCat()}>Decrement</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cat: state.counter,
    user: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCat: () => dispatch({type: 'INCREMENT_COUNTER'}),
    onDecrementCat: () => dispatch({type: 'DECREMENT_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FancyCounter)