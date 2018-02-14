
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
          <div className="navbar-burger" data-target="nav-toggle" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={burger} id="nav-toggle">
          <div className="navbar-start">
            <Link className="navbar-item" to="/" onClick={this.toggleNav}>Home</Link>
            <Link className="navbar-item" to={`/users`} onClick={this.toggleNav}>Users</Link>
            <div className="navbar-item has-dropdown is-hoverable ">
              <a className="navbar-link" onClick={this.toggleNav}>Topics</a>
              <div className="navbar-dropdown is-boxed">
                <Link className="navbar-item" to={`/topics/football/articles`} onClick={this.toggleNav}>Football</Link>
                <Link className="navbar-item" to={`/topics/cooking/articles`} onClick={this.toggleNav}>Cooking</Link>
                <Link className="navbar-item" to={`/topics/coding/articles`} onClick={this.toggleNav}>Coding</Link>
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

