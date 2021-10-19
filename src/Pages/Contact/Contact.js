import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="my-4">Who do you want to talk?</h1>
            <div className="container">
                <input className="form-control my-2" type="text" placeholder="Your Email" required />
                <input className="form-control" type="text" placeholder="Subject" />
                <textarea className="form-control my-2" style={{ height: '250px' }} placeholder="Leave your message here" id="floatingTextarea"></textarea>
            </div>
            <button className="btn btn-lg btn-outline-success my-3 px-5">Subimt</button>
        </div>
    );
};

export default Contact;