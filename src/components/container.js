import React from "react"
import containerStyles from "./container.module.css"

import { Link } from "gatsby"

const NavBar = props => (
  <div className="navbar-links">
    <Link to={props.to}>{props.children}</Link>
  </div>
)

export default function Container({ children }) {
  return (
    <>
      <header className="navbar-wrapper">
        <Link to="/">
          <h3 className="logo-name">Image ID</h3>
        </Link>
        <div className="navbar-links-wrapper">
          <NavBar to="/">Home</NavBar>
          <NavBar to="/about/">About</NavBar>
          <NavBar to="/donate/">Donate</NavBar>
        </div>
      </header>
      <div className={containerStyles.container}>
        {children}
      </div>
  </>
  )
}
