
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
 state = {
   burger: "navbar-menu"
 }
  

   toggleNav = () => {
    if (this.state.burger == "navbar-menu") {
      this.setState({ burger: "navbar-menu is-active" })
      
    } else {
      this.setState({ burger: "navbar-menu" })
    }
  }



render () {
  const {burger} = this.state
  return (
    <div>
      <nav className="navbar is-dark fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img className="img-responsive" src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png" id="white-nav-logo" title="Northcoders coding bootcamp logo" />
          </a>
          <div className="navbar-burger" id="nav-toggle" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={burger} id="nav-toggle">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to={`/users`}>Users</Link>
            <div className="navbar-item has-dropdown is-hoverable ">
              <a className="navbar-link">Topics</a>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to={`/topics/football/articles`}>Football</Link>
                <Link className="navbar-item" to={`/topics/cooking/articles`}>Cooking</Link>
                <Link className="navbar-item" to={`/topics/coding/articles`}>Coding</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
}




export default Navbar

