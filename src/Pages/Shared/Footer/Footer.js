import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white pt-4">
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <h2>Health Care</h2>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <h4>Quick Links</h4>
                    <Nav.Link className="text-white fw-bold" href="/services">Services</Nav.Link>
                    <Nav.Link className="text-white fw-bold" href="/about">About</Nav.Link>
                    <Nav.Link className="text-white fw-bold" href="/contact">Contact</Nav.Link>
                </Col>
                <Col sm={12} md={12} lg={4}>
                    <h4>Contact Us</h4>
                    <p>abcd@xyz.com
                        <br />
                        +880123456789
                        <br />
                        Chittagong, Bangladesh
                    </p>
                </Col>
            </Row>
            <p className="py-3">Copyright &copy;2021 Health Care, All rights reserved.</p>
        </div>
    );
};

export default Footer;