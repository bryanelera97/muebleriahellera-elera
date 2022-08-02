

import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import './navbar.css';
import CartWidget from '../Cart/CartWidget';


const NavBarExample = ()=>{
    return(
        <>   

        <Navbar className= "navBg" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand styas={Link} to="/" >MUEBLES HELLERA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
               
                <NavDropdown title="Category" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Sofas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> Sillas  </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Muebles-de-sala</NavDropdown.Item>

                </NavDropdown>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet>

            </Outlet>
        </section>
        
        
        </>
    )
}
export default NavBarExample