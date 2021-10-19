import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './OfferedServices.css';

const OfferedServices = () => {
    return (
        <div className="bg-dark text-white py-5">
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col lg={8}>
                        <Row>
                            <h1>Our Offered Services</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, tempora!</p>
                            <Card className="col-lg-6 border-0 mt-3 bg-dark" style={{ width: '350px' }}>
                                <Card.Img variant="top" src="https://preview.colorlib.com/theme/medical/img/xs1.jpg.pagespeed.ic.Bf0bQSd7jA.webp" />
                                <Card.Body>
                                    <Card.Title style={{ color: '#69be00', fontWeight: 'bold' }}>Cardiac Treatment</Card.Title>
                                    <Card.Text className="text-muted">
                                        To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-lg-6 border-0 mt-3 bg-dark" style={{ width: '350px' }}>
                                <Card.Img variant="top" src="https://preview.colorlib.com/theme/medical/img/xs2.jpg.pagespeed.ic.KwTcmCfB3V.webp" />
                                <Card.Body>
                                    <Card.Title style={{ color: '#69be00', fontWeight: 'bold' }}>Routine Checkup</Card.Title>
                                    <Card.Text className="text-muted">
                                        Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col lg={4} >
                        <div className="department">
                            <h3 className="mb-4">Department</h3>
                            <ul>
                                <li className="listItem">Pediatric Diagnosis</li>
                                <li className="listItem">Outpatient Rehabiliation</li>
                                <li className="listItem">Laryngological Functions</li>
                                <li className="listItem">Ophthalmology Unit</li>
                                <li className="listItem">Cardiac Unit</li>
                                <li className="listItem">Outpatient Surgery</li>
                                <li className="listItem">Gynaecological Wings</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OfferedServices;