import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, department, subjects, fees, study, chamber } = props.doctor;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="rounded-circle d-block mx-auto" variant="top" src={img} style={{ width: '200px', height: '200px' }} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {subjects.slice(0, 2)}
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item><h5 className="text-primary">{department}</h5></ListGroup.Item>
                            <ListGroup.Item>{study}</ListGroup.Item>
                            <ListGroup.Item>Fees: {fees} Tk</ListGroup.Item>
                            <ListGroup.Item>Location: {chamber}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/doctor/${id}`}><button className="btn btn-warning">Appointment</button></Link>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;