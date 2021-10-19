import React from 'react';
import { Carousel } from 'react-bootstrap';
import YouTube from 'react-youtube';

const Feedback = () => {
    return (
        <div className="my-5">
            <h1 className="display-4" style={{ color: '#69be00' }}>Enjoy our clients feedback</h1>
            <div className="d-flex my-5">
                <div>
                    <YouTube videoId="o8NIN8dJqdc" opts={{ width: '570', height: '310' }}></YouTube>
                </div>
                <div className="ms-4">
                    <Carousel variant="dark" controls={false}>
                        <Carousel.Item>
                            <div className="mb-5">
                                <h1>Slide 1</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorem rem distinctio reiciendis officia expedita esse maxime repudiandae a eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, temporibus deleniti quasi excepturi commodi quaerat.</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="mb-5">
                                <h1>Slide 2</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorem rem distinctio reiciendis officia expedita esse maxime repudiandae a eum?</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="mb-5">
                                <h1>Slide 3</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorem rem distinctio reiciendis officia expedita esse maxime repudiandae a eum?</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </div >
    );
};

export default Feedback;