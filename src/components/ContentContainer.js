import React from "react"
import Container from '@material-ui/core/Container'

import { Link } from "gatsby"

const NavBar = props => (
  <div className="navbar-links">
    <Link to={props.to}>{props.children}</Link>
  </div>
)

export default function ContentContainer({ children }) {
  return (
    <>
      <Container maxWidth="false" disableGutters="true">
        <header className="navbar-wrapper">
          <Link to="/">
            <h3 className="logo-name">Image ID</h3>
          </Link>
          <div className="navbar-links-wrapper">
            <NavBar to="/about/">About</NavBar>
          </div>
        </header>
      </Container>
      <Container maxWidth="md">
        {children}
      </Container>
  </>
  )
}
