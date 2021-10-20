import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {

    ////////////// Destracturing  user and logOut from useAuth hook
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
                        <Nav.Link className="navtxt" as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/services">
                            Services
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/blood">
                            Blood
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/shop" >
                            Shop-now
                        </Nav.Link>
                        <Nav.Link className="navtxt" as={Link} to="/about" >
                            About
                        </Nav.Link>
                        
                        {/* If user Logged in or not then Display functionality by turnary operator */}
                        {
                            user?.email ?
                            <Button className="navtxt" onClick={logOut} variant="light">Log-out</Button> 
                            :
                            <Nav.Link  as={Link} className="txtnav" to="/login">Log-in</Nav.Link>
                        }

                        {/* If user is Loging then show username or email */}
                        {
                            user.email &&
                            <Navbar.Text className="navtxt">
                             <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <a href="#login">{user.displayName ? user.displayName : user.email }</a>
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