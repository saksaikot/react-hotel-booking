import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

import { Link, useHistory } from "react-router-dom";
import routePaths from "./routerPaths";

export default function NavTop() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    // if (logoutResultError) return setError("Logging out failed");
    history.push(routePaths.login);
  };

  const Auth = (
    <Nav>
      <Link to={routePaths.login} className="nav-link">
        Login
      </Link>
      <Link to={routePaths.signup} className="nav-link">
        Signup
      </Link>
    </Nav>
  );
  const SignOut = (
    <Nav>
      <a onClick={handleLogout} className="nav-link" href="/gallery#top">
        Logout
      </a>
    </Nav>
  );
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Link to={routePaths.gallery} className="navbar-brand">
          PhotoG
        </Link>
        {/* <Navbar.Brand href="#home">PhotoG</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={routePaths.gallery} className="nav-link">
              Gallery
            </Link>
          </Nav>
          {currentUser ? SignOut : Auth}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
