import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/Logo.svg";

const navbarStyle = {
  backgroundColor: "LightBlue",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: "11rem", maxHeight: "2rem" }} />
      </Container>
    </Navbar>
  );
};

export default Header;
