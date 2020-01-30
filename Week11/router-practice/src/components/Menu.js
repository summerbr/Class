import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
//NavLink to utilize classnames

export class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu
