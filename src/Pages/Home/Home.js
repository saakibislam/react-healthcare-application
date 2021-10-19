import './Home.css';
import React from 'react';
import img1 from '../../images/slide1.jpg';
import img2 from '../../images/slide2.jpg';
import img3 from '../../images/slide3.jpg';
import Feedback from '../Feedback/Feedback';
import { Carousel, Container } from 'react-bootstrap';
import OfferedServices from '../Services/OfferedServices/OfferedServices';

const Home = () => {
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
            <OfferedServices></OfferedServices>
            <Container>
                <Feedback></Feedback>
            </Container>
        </div>
    );
};

export default Home;