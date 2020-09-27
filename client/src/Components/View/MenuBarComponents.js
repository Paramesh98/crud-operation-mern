import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

const MenuBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar className="bg-light" expand="md">
        <Container>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <NavbarToggler onClick={toggleHandler}></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <Link className="nav-link" to="/">
                  Posts
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/add">
                  Create
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBarComponent;
