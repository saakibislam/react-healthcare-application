import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Firebase/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home" className="fs-2">Health Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} activeStyle={{ backgroundColor: '#7AC64D', borderRadius: '3px' }} className="text-white fs-5" to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={{ backgroundColor: '#7AC64D', borderRadius: '3px' }} className="text-white fs-5" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={{ backgroundColor: '#7AC64D', borderRadius: '3px' }} className="text-white fs-5" to="/services">Services</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={{ backgroundColor: '#7AC64D', borderRadius: '3px' }} className="text-white fs-5" to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={{ backgroundColor: '#7AC64D', borderRadius: '3px' }} className="text-white fs-5" to="/contact">Contact</Nav.Link>
                        {
                            user.email ?
                                <>
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">{user.displayName}</a>
                                    </Navbar.Text>
                                    <Nav.Link as={NavLink} to="/home" onClick={logOut}><button className="btn btn-danger fs-5">Logout</button></Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={NavLink} to="/register"><button className="btn btn-outline-primary fs-5">Register</button></Nav.Link>
                                    <Nav.Link as={NavLink} to="/login"><button className="btn btn-outline-warning fs-5">Login</button></Nav.Link>
                                </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;