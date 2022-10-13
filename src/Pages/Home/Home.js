import './Home.css';
import React, { useEffect, useState } from 'react';
import img1 from '../../images/slide1.jpg';
import img2 from '../../images/slide2.jpg';
import img3 from '../../images/slide3.jpg';
import Feedback from '../Feedback/Feedback';
import { Carousel, Container } from 'react-bootstrap';
import OfferedServices from '../Services/OfferedServices/OfferedServices';

const Home = () => {
    const [doctors, setDoctors] = useState();
    useEffect(() => {
        fetch('https://mocki.io/v1/d2d17b56-dba9-4378-b806-8fac029fa84b')
            .then(res => res.json())
            .then(data => setDoctors(data.slice(2, 8)))
    }, [])
    // console.log(doctors)
    return (
        <div>
            <div className="main-div">
                <h1 className="main-text" style={{ color: '#fd592d' }}>We Care for Your Health<br />Every Moment</h1>
            </div>
            <Carousel variant="dark" fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <h1 className="mt-5">Our Doctors:</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-auto px-5">
                {
                    doctors?.map(doctor => <div className="col" key={doctor.id}>
                        <div className="card">
                            <img src={doctor.img} className="card-img-top w-50 rounded-circle mx-auto" alt="Doctor Avatar" />
                            <div className="card-body">
                                <h5 className="card-title">{doctor.name}</h5>
                                <h6 className="card-subtitle mb-2 text-success">{doctor.department}</h6>
                                <p className="card-text">{doctor.subjects}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <OfferedServices></OfferedServices>
            <Container>
                <Feedback></Feedback>
            </Container>
        </div >
    );
};

export default Home;