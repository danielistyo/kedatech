import { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import LoginModal from "../LoginModal";
import "./Navbar.scss";

const NavBar = () => {
  const [navClasses, setNavClasses] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 20) setNavClasses("scrolled-navbar");
    else setNavClasses("");
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const onLoginClose = () => setShowLogin(false);
  const onLoginClick = () => setShowLogin(true);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={navClasses}>
      <LoginModal show={showLogin} handleClose={onLoginClose} />
      <Container>
        <a href="/" className="navbar-title">
          <span className="navbar-logo" /> HOME
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-menu">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">PRICING</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
          <Button variant="outline-info" size="sm" className="navbar-login" onClick={onLoginClick}>
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
