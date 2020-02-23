import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <>
      <style>
        { `
      .navbar {
        background: #015056;
      }
      .navbar-brand,
       .nav-link
       {
        color: white;
      }
    ` }
      </style>
      <Navbar bg="none" variant="dark" expand="lg">
        <Navbar.Brand href="#home">So Make It</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href='/'><Nav.Link href="/">Home</Nav.Link></Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Trustees</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sponsors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Visit</Nav.Link>
            <Nav.Link href="#link">Chat</Nav.Link>
            <NavDropdown title="Social" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">YouTube</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Flickr</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Wiki</Nav.Link>
            <Nav.Link href="#link">Members Area</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;