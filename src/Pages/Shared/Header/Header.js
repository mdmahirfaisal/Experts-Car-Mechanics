import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home#home" className="fw-bold">Genius </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="text-light">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-light">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className="text-light">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="dark">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login" className="text-light">Login</Nav.Link>
                        }

                        <Navbar.Text className="ms-2 ">
                            {user.displayName &&
                                <Link to="/login" className="text-light text-decoration-none fs-5">User: {user?.displayName}</Link>

                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;