import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "Lightblue",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <NavbarBrand href="/">{title}</NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
