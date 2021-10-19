import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowDoctors from './ShowDoctors';

const Doctors = () => {
    const [doctors, setDoctros] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/d66acfd9-3c3c-4535-b38e-7e6f59f9fd7f')
            .then(response => response.json())
            .then(data => setDoctros(data))
    }, [])
    return (
        <div className="p-4">
            <h1>Our doctors:</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    doctors.map(doctor => <ShowDoctors
                        key={doctor.id}
                        doctor={doctor}
                    ></ShowDoctors>)
                }
            </Row>
        </div>
    );
};
// https://mocki.io/v1/d66acfd9-3c3c-4535-b38e-7e6f59f9fd7f

export default Doctors;