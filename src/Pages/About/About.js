import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Feedback from '../Feedback/Feedback';
import YouTube from 'react-youtube';


const About = () => {
    return (
        <Container>
            <div className="my-5">
                <h1 style={{ color: '#fd592d' }}>Goals to Achieve for the leadership</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="d-flex justify-content-between align-items-center my-5">
                <div className="w-50 my-5">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Success</Accordion.Header>
                            <Accordion.Body className="text-start">
                                <p>Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Info</Accordion.Header>
                            <Accordion.Body className="text-start">
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. leo quam aliquet diam, congue laoreet elit metus eget diam.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Warning</Accordion.Header>
                            <Accordion.Body className="text-start">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="my-5">
                    <YouTube videoId="jh5U5BnpGN8" opts={{ width: '570', height: '330' }}></YouTube>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-5">
                <div className="w-50 my-5">
                    <img className="img-fluid" src="https://i.ibb.co/7J9YnWP/xabout-img-jpg-pagespeed-ic-n-Jaksdz-D9-Q.webp" alt="" />
                </div>
                <div className="w-50 ms-5 my-5">
                    <h2>Who are we to serve the nation</h2>
                    <p className="text-start mt-4"><small>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                        <br /> <br /> inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.</small></p>
                </div>
            </div>
            <Feedback></Feedback>
        </Container >
    );
};

export default About;