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
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Image ID</h3>
        </Link>
        <div style={{ listStyle: `none`, float: `right` }}>
          <NavBar to="/">Home</NavBar>
          <NavBar to="/about/">About</NavBar>
        </div>
      </header>
      <div className={containerStyles.container}>
        {children}
      </div>
  </>
  )
}
