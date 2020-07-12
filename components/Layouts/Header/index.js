import Link from 'next/link';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import NavDropdown from 'react-bootstrap/lib/NavDropdown';
// import MenuItem from 'react-bootstrap/lib/MenuItem';

const Header = () => (
  <header>
    <Navbar inverse collapseOnSelect className="navbar-fixed-top opaqued" role="banner">
      <Navbar.Header>
        <Navbar.Brand>
          <Link href="/">
            <a className="navbar-brand" href="index.html">
              <h1>
                <span className="pe-7s-gleam bounce-in" />
                {' '}
                IMPACT
              </h1>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>*/}
        </Nav>
        <Nav pullRight>
          <li className="active"><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About Us</a></Link></li>
          <li><Link href="/services"><a>Services</a></Link></li>
          <li><Link href="/contact-us"><a>Contact</a></Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
