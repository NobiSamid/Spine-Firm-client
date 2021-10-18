import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const {user, logOut } = useAuth();
    return (
        <div>
             <Navbar bg="light" variant="light" sticky="top" expand="lg">
            <Container fluid>
                <Navbar.Brand className="ms-5 txth" href="/">Spine Firm</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    {/************************* Router Links **********************/}
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services">
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to="/blood">
                            Blood
                        </Nav.Link>
                        <Nav.Link as={Link} to="/shop" >
                            Shop-now
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" >
                            About
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/login" >
                            Log-in
                        </Nav.Link> */}
                        {
                            user?.email ?
                            <Button onClick={logOut} variant="light">Log-out</Button> 
                            :
                            <Nav.Link as={Link} className="txtnav" to="/login">Log-in</Nav.Link>
                        }
                        {
                            user.email &&
                            <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;